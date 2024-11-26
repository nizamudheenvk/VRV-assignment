import React, { useState } from 'react';
import { saveuserAPI } from '../services/allaPi'; 

const Add = ({ setResponseFromApp, role }) => {
  const [adduser, setAdduser] = useState({
    Name: "",
    Role: "",
    Status: "Active"
  });

  const saveUser = async () => {
    if (role !== "Admin") {
      alert("Only Admins can add users.");
      return;
    }

    const { Name, Role, Status } = adduser;
    if (!Name || !Role || !Status) {
      alert("Name, Role, and Status are required");
      return;
    }

    try {
      const result = await saveuserAPI(adduser);
      if (result.status >= 200 && result.status < 300) {
        setResponseFromApp(result.data);
        setAdduser({ Name: "", Role: "", Status: "Active" });
      } else {
        alert("Error adding user. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while saving the user.");
    }
  };

  return (
    <div className="container bg-dark text-light mt-5 p-4 rounded">
       
      <h2 className="text-center mb-4">Add New Employee</h2>
      {role !== "Admin" && (
        <div className="alert alert-warning text-center">
          Only Admins can add users.
        </div>
      )}
      <div className="card-body">
        <input
          type="text"
          placeholder="Name"
          value={adduser.Name}
          onChange={(e) => setAdduser({ ...adduser, Name: e.target.value })}
          className="form-control mb-3"
          disabled={role !== "Admin"}
        />
        <input
          type="text"
          placeholder="Role"
          value={adduser.Role}
          onChange={(e) => setAdduser({ ...adduser, Role: e.target.value })}
          className="form-control mb-3"
          disabled={role !== "Admin"}
        />
        <select
          className="form-control mb-3"
          value={adduser.Status}
          onChange={(e) => setAdduser({ ...adduser, Status: e.target.value })}
          disabled={role !== "Admin"}
          
        >
         

          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
         
        </select>
        <button
          onClick={saveUser}
          className="btn btn-primary btn-block"
          disabled={role !== "Admin"}
        >
          Add User
        </button>
      </div>
    </div>
  );
};

export default Add;
