import React from "react";

const UserList = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h3>List of System Users</h3>
      <button style={{ marginBottom: "10px", float: "right" }}>+ Create New</button>
      <table border="1" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Username</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img
                src="https://via.placeholder.com/50" // Replace with actual avatar image if available
                alt="Avatar"
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              />
            </td>
            <td>Babji Vali Shaik</td>
            <td>Babji</td>
            <td>Staff</td>
            <td>
              <select>
                <option>Action</option>
                <option>Edit</option>
                <option>Delete</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <img
                src="https://via.placeholder.com/50" // Replace with actual avatar image if available
                alt="Avatar"
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              />
            </td>
            <td>Partha Admin</td>
            <td>partha-adm</td>
            <td>Administrator</td>
            <td>
              <select>
                <option>Action</option>
                <option>Edit</option>
                <option>Delete</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <div style={{ marginTop: "10px", textAlign: "right" }}>
        <button>Previous</button> <button>Next</button>
      </div>
    </div>
  );
};

export default UserList;
