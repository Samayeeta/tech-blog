import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs/pending", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlogs();
  }, [token]);

  const handleAction = async (id, action, reason = "") => {
    const endpoint = action === "approve" ? "/api/blogs/approve" : "/api/blogs/reject";
    const body = action === "approve" ? { blogId: id } : { blogId: id, reason };
    try {
      await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(body),
      });
      setBlogs(blogs.filter((blog) => blog.id !== id)); // Remove blog from the list
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <h1>Admin Dashboard</h1>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          style={{
            margin: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <button
            onClick={() => handleAction(blog.id, "approve")}
            style={{
              marginRight: "10px",
              padding: "5px 10px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Approve
          </button>
          <button
            onClick={() => {
              const reason = prompt("Reason for rejection?");
              if (reason) handleAction(blog.id, "reject", reason);
            }}
            style={{
              padding: "5px 10px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Reject
          </button>
        </div>
      ))}
    </Layout>
  );
};

export default AdminDashboard;
