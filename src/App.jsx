import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Sidebar } from "./Components/Sidebar";
import { AddEmployee } from "./Components/AddEmployee";
import { ListofEmployees } from "./Components/ListofEmployees";
import { useState } from "react";
import { Welcome } from "./Components/Welcome";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [listEmployees, setListEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);

  const handleAddEmployee = (name, email, department) => {
    if (editEmployee) {
      const updatedList = listEmployees.map((emp) =>
        emp.name === editEmployee.name ? employee : emp
      );
      setListEmployees(updatedList);
      setEditEmployee(null);
    } else {
      setListEmployees([
        ...listEmployees,
        { name: name, email: email, department: department },
      ]);
    }
  };

  const handleDelete = (empName) => {
    const newList = listEmployees.filter(
      (employee) => employee.name !== empName
    );
    setListEmployees(newList);
  };
  const handleEdit = (employee) => {
    setEditEmployee(employee);
    setSelectedTab("AddEmployee");
  };
  return (
    <div className="app-container">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="content">
        <Header />
        {selectedTab === "Home" ? (
          <ListofEmployees
            listofEmployees={listEmployees}
            onDeleteClick={handleDelete}
            onEditClick={handleEdit}
          />
        ) : (
          <AddEmployee
            OnNewEmployeeAdded={handleAddEmployee}
            editedEmployee={editEmployee}
          />
        )}
        {listEmployees.length === 0 && <Welcome />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
