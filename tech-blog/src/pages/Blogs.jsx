import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/blogs");
        const data = await response.json();
        if (data.status === "success") {
          setBlogs(data.data);
          setFilteredBlogs(data.data);
        } else {
          console.error("Failed to fetch blogs:", data.message);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredBlogs(filtered);
  };

  return (
    <div className="blogs-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Blogs..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className="blog-container">
        {filteredBlogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <div className="blog-details">
              <h3>{blog.title}</h3>
              <div className="tags">
                {blog.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
              <p>By: {blog.firstName} {blog.lastName}</p>
              <p>Email: {blog.email}</p>
              <Link to={`/blog/${blog.id}`} className="read-more">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
