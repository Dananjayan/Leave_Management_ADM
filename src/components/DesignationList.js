import React from "react";

const DesignationList = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h3>List of Designation</h3>
      <button style={{ marginBottom: "10px", float: "right" }}>+ Create New</button>
      <table border="1" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Designation</th>
            <th>Description</th>
            <th>Date Updated</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>HR Staff</td>
            <td>Human Resource Staff</td>
            <td>2021-08-21 10:23</td>
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
            <td>Web Developer</td>
            <td>Web Developer</td>
            <td>2021-08-21 10:22</td>
            <td>
              <select>
                <option>Action</option>
                <option>Edit</option>
                <option>Delete</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Programmer</td>
            <td>Programmer</td>
            <td>2021-08-21 10:22</td>
            <td>
              <select>
                <option>Action</option>
                <option>Edit</option>
                <option>Delete</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Staff</td>
            <td>Office Clerk</td>
            <td>2021-08-21 10:22</td>
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

export default DesignationList;
