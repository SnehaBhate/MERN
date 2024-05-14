import React from "react";
import { Employee } from "./Employee";

export const ListofEmployees = ({
  listofEmployees,
  onDeleteClick,
  onEditClick,
}) => {
  return (
    <>
      {listofEmployees.map((employee, index) => (
        <Employee
          key={index}
          employee={employee}
          employeeName={employee.name}
          employeeEmail={employee.email}
          employeeDepartment={employee.department}
          onDeleteClick={onDeleteClick}
          onEditClick={onEditClick}
        ></Employee>
      ))}
    </>
  );
};
