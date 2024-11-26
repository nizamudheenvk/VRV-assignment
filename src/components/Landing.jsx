import React, { useState } from "react";

const Landing = () => {
  const [role, setRole] = useState("");

  const handleStart = () => {
    if (!role) {
      alert("Please select a role");
      return;
    }
    window.location.href = `/usermanagement?role=${role}`;
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-black text-light">
      <h1 className="display-4 mb-4 fw-bold text-center">Employee Management App</h1>
      <div className="card p-4 shadow-lg border-0 bg-secondary w-50">
        <div className="mb-3">
          <label htmlFor="roleSelect" className="form-label fw-bold">
            Select Role
          </label>
          <select
            id="roleSelect"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="form-select form-select-lg"
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Viewer">Viewer</option>
          </select>
        </div>
        <button
          onClick={handleStart}
          className="btn btn-danger btn-lg w-100 fw-bold"
        >
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Landing;
