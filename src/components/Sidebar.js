import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">LMS</h2>
      <ul className="menu">
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/employee-list" className={({ isActive }) => (isActive ? "active" : "")}>
            Employees List
          </NavLink>
        </li>
        <li>
          <NavLink to="/application-list" className={({ isActive }) => (isActive ? "active" : "")}>
            Application List
          </NavLink>
        </li>
        <li>
          <NavLink to="/department-list" className={({ isActive }) => (isActive ? "active" : "")}>
            Department List
          </NavLink>
        </li>
        <li>
          <NavLink to="/designation-list" className={({ isActive }) => (isActive ? "active" : "")}>
            Designation List
          </NavLink>
        </li>
        <li>
          <NavLink to="/leave-type-list" className={({ isActive }) => (isActive ? "active" : "")}>
            Leave Type List
          </NavLink>
        </li>
        <li>
          <NavLink to="/user-list" className={({ isActive }) => (isActive ? "active" : "")}>
            User List
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports" className={({ isActive }) => (isActive ? "active" : "")}>
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={({ isActive }) => (isActive ? "active" : "")}>
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
