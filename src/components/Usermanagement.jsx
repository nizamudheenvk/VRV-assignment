import React, { useEffect, useState } from "react";
import { deletealluserApi, EdituserApi, getalluserApi } from "../services/allaPi";
import { Button, FloatingLabel, Form, Modal, Table, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const Usermanagement = ({ responseFromAPP, role }) => {
  const [allUsers, setAllUsers] = useState([]); 
  const [editUser, setEditUser] = useState({}); 
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const [isUpdating, setIsUpdating] = useState(false); 
  const [error, setError] = useState(""); 

  const handleClose = () => {
    setShow(false);
    setEditUser({});
    setError("");
  };

  const handleShow = (user) => {
    setEditUser(user);
    setShow(true);
  };

  useEffect(() => {
    fetchAllUsers();
  }, [responseFromAPP]);

  const fetchAllUsers = async () => {
    setIsLoading(true);
    try {
      const result = await getalluserApi();
      if (result.status >= 200 && result.status < 300) {
        setAllUsers(result.data);
      } else {
        console.error(result);
      }
    } catch (error) {
      console.error( error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteUser = async (id) => {
    try {
      await deletealluserApi(id);
      fetchAllUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const editUsers = async () => {
    if (!editUser.Name || !editUser.Role || !editUser.Status) {
      setError("All fields are required.");
      return;
    }
    setError("");
    setIsUpdating(true);
    try {
      const result = await EdituserApi(editUser);
      if (result.status >= 200 && result.status < 300) {
        fetchAllUsers(); 
        handleClose();
      } else {
        setError("");
      }
    } catch (err) {
      console.error( err);
      setError("");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    
    <div className="mt-5 container">
     
      <h2 className="text-center text-primary mb-4">Employees List</h2>

      <div className="table-responsive shadow-lg rounded bg-light p-4">
        {isLoading ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
            <p>Loading users...</p>
          </div>
        ) : (
          <Table bordered hover responsive="sm">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.length > 0 ? (
                allUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.Name}</td>
                    <td>{user.Role}</td>
                    <td
                      className={
                        user.Status === "active"
                          ? "text-success fw-bold"
                          : "text-danger fw-bold"
                      }
                    >
                      {user.Status}
                    </td>
                    <td>
                      {role === "Admin" && (
                        <>
                          <Button
                            variant="outline-primary"
                            size="sm"
                            className="me-2"
                            onClick={() => handleShow(user)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => deleteUser(user.id)}
                          >
                            Delete
                          </Button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-danger">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        )}
      </div>

     
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
            {error && <div className="text-danger mb-3">{error}</div>}
            <FloatingLabel controlId="floatingUsername" label="Username" className="mb-3">
              <Form.Control
                value={editUser?.Name || ""}
                onChange={(e) => setEditUser({ ...editUser, Name: e.target.value })}
                type="text"
                placeholder="Username"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingRole" label="Role" className="mb-3">
              <Form.Control
                value={editUser?.Role || ""}
                onChange={(e) => setEditUser({ ...editUser, Role: e.target.value })}
                type="text"
                placeholder="Role"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingStatus" label="Status">
              <Form.Select
                value={editUser?.Status || ""}
                onChange={(e) => setEditUser({ ...editUser, Status: e.target.value })}
              >
                <option value="">Select status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Form.Select>
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={editUsers} variant="primary" disabled={isUpdating}>
            {isUpdating ? (
              <>
                <Spinner animation="border" size="sm" className="me-2" />
                Updating...
              </>
            ) : (
              "Update"
            )}
          </Button>
        </Modal.Footer>
      </Modal>

      <div className=" mt-3">
    <Link to="/" className="text-decoration-none">
      <h5 className=" text-center text-primary">Log Out</h5>
    </Link>
  </div>
     
    </div>
  );
};

export default Usermanagement;
