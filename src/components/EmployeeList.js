import React from 'react';


const EmployeeList = () => {
  return (
    <div className="content-wrapper">
      <div className="card">
        <div className="card-header">
          <h2>List of Employees</h2>
          <button className="create-btn">+ Create New</button>
        </div>
        <div className="card-body">
          <div className="table-controls">
            <label>
              Show
              <select className="entries-select">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
              entries
            </label>
            <input type="text" placeholder="Search:" className="search-input" />
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Avatar</th>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Details</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><img src="path/to/avatar1.png" alt="Avatar" className="avatar" /></td>
                <td>6231415</td>
                <td>John Smith</td>
                <td>
                  Department: IT Department<br />
                  Designation: Web Developer
                </td>
                <td>
                  <button className="action-btn">Action</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td><img src="path/to/avatar2.png" alt="Avatar" className="avatar" /></td>
                <td>SBV10003</td>
                <td>Partha Emp</td>
                <td>
                  Department: IT Department<br />
                  Designation: Programmer
                </td>
                <td>
                  <button className="action-btn">Action</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td><img src="path/to/avatar3.png" alt="Avatar" className="avatar" /></td>
                <td>SBV10001</td>
                <td>Prakash S</td>
                <td>
                  Department: HR Department<br />
                  Designation: Web Developer
                </td>
                <td>
                  <button className="action-btn">Action</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="table-pagination">
            <span>Showing 1 to 3 of 3 entries</span>
            <div className="pagination-controls">
              <button className="page-btn">Previous</button>
              <button className="page-btn active">1</button>
              <button className="page-btn">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
