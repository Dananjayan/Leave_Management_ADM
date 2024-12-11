import React from "react";

const DepartmentList = () => {
  // Placeholder for your dynamic data
  const data = []; // Replace with dynamic data when available

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>List of Department</h2>
        <button className="btn btn-primary">+ Create New</button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Date Updated</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.dateUpdated}</td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Action
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <button className="dropdown-item" type="button">
                          Edit
                        </button>
                        <button className="dropdown-item" type="button">
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>Showing 1 to {data.length} of {data.length} entries</div>
        <nav>
          <ul className="pagination">
            <li className="page-item disabled">
              <button className="page-link" type="button" tabIndex="-1">
                Previous
              </button>
            </li>
            <li className="page-item active">
              <button className="page-link" type="button">
                1
              </button>
            </li>
            <li className="page-item">
              <button className="page-link" type="button">
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DepartmentList;
