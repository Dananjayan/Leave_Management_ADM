// import React, { useState, useEffect } from 'react';

import React from 'react';
function Reports() {
//   const [startDate, setStartDate] = useState('08-12-2024');
//   const [endDate, setEndDate] = useState('11-12-2024');
//   const [leaveRecords, setLeaveRecords] = useState([]);

//   useEffect(() => {
//     // Fetch leave records based on start and end dates
//     const fetchLeaveRecords = async () => {
//       const response = await fetch(`/api/leave-records?startDate=${startDate}&endDate=${endDate}`);
//       const data = await response.json();
//       setLeaveRecords(data);
//     };

//     fetchLeaveRecords();
//   }, [startDate, endDate]);

//   const handleStartDateChange = (event) => {
//     setStartDate(event.target.value);
//   };

//   const handleEndDateChange = (event) => {
//     setEndDate(event.target.value);
//   };

//   const handleFilter = () => {
//     // Fetch leave records again with updated dates
//     fetchLeaveRecords();
//   };

  return (
    <div className="reports-container">
      <h2>Reports</h2>
      {/* <div className="filter-section">
        <label htmlFor="startDate">Start Date:</label>
        <input type="date" id="startDate" value={startDate} onChange={handleStartDateChange} />
        <label htmlFor="endDate">End Date:</label>
        <input type="date" id="endDate" value={endDate} onChange={handleEndDateChange} />
        <button onClick={handleFilter}>Filter</button>
      </div> */}
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Employee</th>
            <th>Leave Type</th>
            <th>Date</th>
            <th>Status</th>
            <th>Reason</th>
          </tr>
        </thead>
        {/* <tbody>
          {leaveRecords.length > 0 ? (
            leaveRecords.map((record, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{record.employee}</td>
                <td>{record.leaveType}</td>
                <td>{record.date}</td>
                <td>{record.status}</td>
                <td>{record.reason}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No Records.</td>
            </tr>
          )}
        </tbody> */}
      </table>
    </div>
  );
}

export default Reports;