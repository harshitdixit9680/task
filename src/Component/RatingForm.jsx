import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Import CSS file

const EmployeeRating = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchEmployeeId, setSearchEmployeeId] = useState('');

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/timesheet');
        setEmployeeData(response.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchEmployeeData();
  }, []);

  const filteredData = employeeData.filter(employee => {
    return (
      (employee.name && employee.name.toLowerCase().includes(searchName.toLowerCase())) &&
      (employee.employeeId && employee.employeeId.includes(searchEmployeeId))
    );
  });

  return (
    <div className="employee-rating-container"> {/* Add a class for styling */}
      <h3>Employee Ratings</h3>
      <div className="search-container"> {/* Add a class for styling */}
        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={e => setSearchName(e.target.value)}
          className="search-input"
        />
        <input
          type="text"
          placeholder="Search by employee ID"
          value={searchEmployeeId}
          onChange={e => setSearchEmployeeId(e.target.value)}
          className="search-input" 
        />
      </div>
      <table className="employee-table"> {/* Add a class for styling */}
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(employee => (
            <tr key={employee.employeeId}>
              <td>{employee.employeeId}</td>
              <td>{employee.name}</td>
              <td>{employee.rating || 'Not Rated'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeRating;
