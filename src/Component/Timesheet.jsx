// EmployeeComponent.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Timesheet = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [date, setDate] = useState('');
  const [hoursWorked, setHoursWorked] = useState('');
  const [todayWorked, setTodayWorked] = useState('');
const [name, setName] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/timesheet', {
        employeeId,
        name,
        date,
        hoursWorked,
        todayWorked
      });
      toast.success('Timesheet entry added successfully');
      console.log('Timesheet entry added successfully');
    } catch (error) {
      console.error('Error adding timesheet entry:', error);
      toast.error('Error adding timesheet entry');
    }
  };

  return (
    <div>
      <h3>Fill Timesheet</h3>
      <form onSubmit={handleSubmit}>
        <label>Employee ID:</label>

        <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} required />
        <label>Employee Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <label>Hours Worked:</label>
        <input type="number" value={hoursWorked} onChange={(e) => setHoursWorked(e.target.value)} required />
        <label>Today Work:</label>
        <input type="text" value={todayWorked} onChange={(e) => setTodayWorked(e.target.value)} required />
        <button type="submit">Submit Timesheet</button>
      </form>
    
    </div>
    
  );
};

export default Timesheet;
