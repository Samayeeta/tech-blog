import React, { useState } from "react";
import "./Blogs.css";

const blogs = [
  {
    id: 1,
    title: "Understanding Python Basics",
    tags: ["Python", "Beginner"],
    content: "This blog covers the fundamental concepts of Python programming.",
  },
  {
    id: 2,
    title: "Intermediate Python Projects",
    tags: ["Python", "Intermediate"],
    content: "Take your Python skills to the next level with these projects.",
  },
  {
    id: 3,
    title: "Advanced Python for Data Science",
    tags: ["Python", "Advanced"],
    content: "Explore advanced techniques in Python for data science applications.",
  },
  {
    id: 4,
    title: "Web Development with Python",
    tags: ["Python", "Web"],
    content: "Learn how to use Python for web development with frameworks like Django.",
  },
  {
    id: 5,
    title: "Automating Tasks with Python",
    tags: ["Python", "Automation"],
    content: "Discover how to automate mundane tasks using Python scripting.",
  },
];

function Blogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTag, setFilterTag] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterTag(e.target.value);
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterTag === "" || blog.tags.includes(filterTag))
  );

  return (
    <div className="blogs-page">
      <h1 className="blogs-title">Explore Blogs</h1>
      <div className="blogs-controls">
        <input
          type="text"
          className="search-input"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select
          className="filter-select"
          value={filterTag}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="Web">Web</option>
          <option value="Automation">Automation</option>
        </select>
      </div>
      <div className="blogs-list">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div key={blog.id} className="blog-container">
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
              <button className="read-more">Read More</button>
            </div>
          ))
        ) : (
          <p>No blogs match your search or filter criteria.</p>
        )}
      </div>
    </div>
  );
}

export default Blogs;
