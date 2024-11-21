import React, { useState } from "react";

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const blogs = [
    { id: 1, title: "Understanding React Hooks", content: "Full content for React Hooks", difficulty: "Beginner" },
    { id: 2, title: "CSS Tricks for Developers", content: "Full content for CSS Tricks", difficulty: "Intermediate" },
    { id: 3, title: "JavaScript ES6 Features", content: "Full content for ES6 Features", difficulty: "Advanced" },
    { id: 4, title: "Node.js Basics", content: "Full content for Node.js Basics", difficulty: "Beginner" },
    { id: 5, title: "Understanding Databases", content: "Full content for Databases", difficulty: "Intermediate" },
  ];

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "all" || blog.difficulty === filter)
  );

  return (
    <div className="blogs-container">
      <h1>Blogs</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      <div className="blog-list">
        {filteredBlogs.map((blog) => (
          <div className="blog-card animated" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content.substring(0, 100)}...</p>
            <a href={`/blogs/${blog.id}`} className="read-more">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
