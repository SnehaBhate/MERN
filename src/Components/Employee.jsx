import React from "react";
import { Button } from "./Button";

export const Employee = ({
  employee,
  employeeName,
  employeeEmail,
  employeeDepartment,
  onDeleteClick,
  onEditClick,
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Sr No.</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Department</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{employeeName}</td>
          <td>{employeeEmail}</td>
          <td>{employeeDepartment}</td>
          <td>
            <Button
              onDelete={onDeleteClick}
              employeeName={employeeName}
              onEditClick={onEditClick}
              employee={employee}
            ></Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
