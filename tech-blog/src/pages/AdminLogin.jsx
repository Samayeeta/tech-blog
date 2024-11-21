import React from "react";

const AdminLogin = () => {
  return (
    <div className="admin-container">
      <h1>Admin Login</h1>
      <form>
        <input type="text" placeholder="Admin ID" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
