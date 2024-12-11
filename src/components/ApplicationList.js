import React from 'react';

const LeaveApplications = () => {
    const data = [
        { id: 1, employeeId: '', employeeName: '', leaveType: '', days: '', status: '' },
        { id: 2, employeeId: '', employeeName: '', leaveType: '', days: '', status: '' },
        { id: 3, employeeId: '', employeeName: '', leaveType: '', days: '', status: '' },
        { id: 4, employeeId: '', employeeName: '', leaveType: '', days: '', status: '' },
    ];

    return (
        <div className="container mt-5">
            <h3 className="mb-4">List of Applications</h3>

            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <label htmlFor="entries" className="me-2">Show</label>
                    <select id="entries" className="form-select d-inline-block" style={{ width: 'auto' }}>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <span className="ms-2">entries</span>
                </div>
                <div>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Search..." 
                        style={{ width: '200px' }}
                    />
                </div>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Employee</th>
                        <th>Leave Type</th>
                        <th>Days</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                                <div>ID: {item.employeeId}</div>
                                <div>Name: {item.employeeName}</div>
                            </td>
                            <td>{item.leaveType}</td>
                            <td>{item.days}</td>
                            <td>
                                <span className={`badge ${item.status === 'Approved' ? 'bg-success' : 'bg-primary'}`}>
                                    {item.status}
                                </span>
                            </td>
                            <td>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="actionMenu" data-bs-toggle="dropdown" aria-expanded="false">
                                        Action
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="actionMenu">
                                        <li><button className="dropdown-item">Approve</button></li>
                                        <li><button className="dropdown-item">Reject</button></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="d-flex justify-content-between align-items-center mt-3">
                <span>Showing 1 to X of Y entries</span>
                <nav>
                    <ul className="pagination mb-0">
                        <li className="page-item"><button className="page-link">Previous</button></li>
                        <li className="page-item"><button className="page-link">1</button></li>
                        <li className="page-item"><button className="page-link">Next</button></li>
                    </ul>
                </nav>
            </div>

            <button className="btn btn-primary mt-3">+ Create New</button>
        </div>
    );
};

export default LeaveApplications;