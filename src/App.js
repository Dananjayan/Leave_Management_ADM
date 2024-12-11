import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing React Router components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import EmployeeList from "./components/EmployeeList";
import ApplicationList from "./components/ApplicationList"; // Example for another page
import DepartmentList from "./components/DepartmentList";
import DesignationList from "./components/DesignationList"; 
import UserList from "./components/UserList"; 
import Reports from "./components/Reports"; 
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Header />
          
          {/* Define Routes for different pages */}
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employee-list" element={<EmployeeList />} />
            <Route path="/application-list" element={<ApplicationList />} />
            <Route path="/department-list" element={<DepartmentList />} />
            <Route path="/designation-list" element={<DesignationList />} />
            <Route path="/user-list" element={<UserList />} />
            <Route path="/reports" element={<Reports />} />
            {/* Add other routes here for each page */}
          </Routes>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
