import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManagerDashboard = () => {
  const [timesheetData, setTimesheetData] = useState([]);

  useEffect(() => {
    const fetchTimesheetData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/timesheet');
        setTimesheetData(response.data);
      } catch (error) {
        console.error('Error fetching timesheet data:', error);
      }
    };

    fetchTimesheetData();
  }, []);

  const handleRatingChange = async (id, employeeId, rating) => {
    try {
      await axios.post('http://localhost:3000/rate', { id, employeeId, rating });
      console.log('Rating updated successfully');
    } catch (error) {
      console.error('Error updating rating:', error);
    }
  };

  return (
    <div>
      <h3>Manager View</h3>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Date</th>
            <th>Hours Worked</th>
            <th>Today Task</th>
            <th>Rating</th>
            <th>Rate Employee</th>
          </tr>
        </thead>
        <tbody>
          {timesheetData.map((entry) => (
            <tr key={entry._id}>
              <td>{entry.employeeId}</td>
              <td>{entry.name}</td>
              <td>{entry.date}</td>
              <td>{entry.hoursWorked}</td>
              <td>{entry.todayWorked}</td>
              <td>{entry.rating || 'Not Rated'}</td>
              <td>
                <select onChange={(e) => handleRatingChange(entry._id, entry.employeeId, e.target.value)}>
                  <option value="">Select Rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerDashboard;
