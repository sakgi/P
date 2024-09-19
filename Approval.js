import React, { useState } from 'react';
import './Approval.css'; // Add the necessary styles

const EmployeeManagement = () => {
  // Sample employee data
  const employeeData = [
    { name: 'John Doe', circle: 'North', empId: 'E001' },
    { name: 'Jane Smith', circle: 'East', empId: 'E002' },
    { name: 'Emily Johnson', circle: 'West', empId: 'E003' },
    { name: 'Michael Brown', circle: 'South', empId: 'E004' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [employees, setEmployees] = useState(employeeData);

  // Function to filter employees based on search term
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="employee-management">
      <h1>Employee Management</h1>

      {/* Display total employee count */}
      <div className="employee-count">
        <strong>Total Employees: {employees.length}</strong>
      </div>

      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Employee..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="search-icon-btn">
          <i className="fa fa-search"></i>
        </button>
      </div>

      {/* Employee table */}
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Circle</th>
            <th>Employee ID</th>
            <th>Team Assigning</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.empId}>
              <td>{employee.name}</td>
              <td>{employee.circle}</td>
              <td>{employee.empId}</td>
              <td>
                <select>
                  <option value="Software">Software</option>
                  <option value="Hardware">Hardware</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeManagement;
