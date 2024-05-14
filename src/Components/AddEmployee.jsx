import React, { useEffect, useState } from "react";

import { Popup } from "./Popup";
import { Employee } from "./Employee";
export const AddEmployee = ({ OnNewEmployeeAdded, editedEmployee }) => {
  // States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(() => {
    if (editedEmployee) {
      setName(editedEmployee.name);
      setEmail(editedEmployee.email);
      setDepartment(editedEmployee.department);
    }
  }, [editedEmployee]);
  // On change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    OnNewEmployeeAdded(name, email, department);
    setName("");
    setEmail("");
    setDepartment("");
  };

  return (
    <div>
      <h2>{editedEmployee ? "Edit Employee" : "Add Employee"}</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            aria-describedby="nameHelp"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleEmailChange}
            value={email}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="department" className="form-label">
            Department
          </label>
          <input
            type="text"
            className="form-control"
            id="department"
            aria-describedby="departmentHelp"
            onChange={handleDepartmentChange}
            value={department}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={onHandleSubmit}
        >
          Submit
        </button>
        <Popup></Popup>
      </form>
    </div>
  );
};
