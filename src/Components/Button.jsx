import React from "react";
export const Button = ({ onDelete, employeeName, onEditClick, employee }) => {
  return (
    <div>
      <button
        style={{ width: "70px" }}
        type="button"
        className="btn btn-info"
        onClick={() => {
          onEditClick(employee);
        }}
      >
        Edit
      </button>
      <button
        style={{ marginLeft: "15px" }}
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          onDelete(employeeName);
        }}
      >
        Delete
      </button>
    </div>
  );
};
