import React from "react";

const Dashboard = () => {
  const stats = [
    { label: "Pending Applications", value: 3, icon: "📄" },
    { label: "Total Departments", value: 3, icon: "🏢" },
    { label: "Total Designations", value: 4, icon: "📋" },
    { label: "Total Type of Leave", value: 4, icon: "📑" },
  ];

  return (
    <div className="dashboard">
      <h2>Welcome to Leave Management System</h2>
      <div className="stats">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="icon">{stat.icon}</div>
            <div className="stat-info">
              <h3>{stat.label}</h3>
              <p>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
