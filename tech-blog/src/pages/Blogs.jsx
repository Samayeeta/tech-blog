import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/get-blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <Layout>
      <h1>All Blogs</h1>
      {blogs.length > 0 ? (
        <ul style={{ textAlign: "left", listStyle: "none", padding: 0 }}>
          {blogs.map((blog) => (
            <li key={blog.id} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No blogs available yet.</p>
      )}
    </Layout>
  );
};

export default Blogs;
