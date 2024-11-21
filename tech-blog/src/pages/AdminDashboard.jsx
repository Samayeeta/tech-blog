import React from "react";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-sections">
        <button>Manage Blogs</button>
        <button>Approve Submissions</button>
        <button>View Reports</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
