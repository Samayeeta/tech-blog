import React, { useState } from "react";
import "./Blogs.css";

const sampleBlogs = [
  {
    title: "How to Fix Slow WordPress Sites on WP Engine",
    description: "A quick guide to speed up your WordPress site hosted on WP Engine...",
    link: "/blog/fix-for-wordpress-sites-hosted-on-wpengine",
    img: "https://via.placeholder.com/500x300?text=WordPress+Optimization",
    tags: ["WordPress", "WP Engine", "Performance"],
  },
  {
    title: "Understanding JavaScript Closures",
    description: "Closures in JavaScript allow for powerful ways of coding, but they can be tricky...",
    link: "/blog/understanding-javascript-closures",
    img: "https://via.placeholder.com/500x300?text=JavaScript+Closures",
    tags: ["JavaScript", "Web Development", "Closures"],
  },
  {
    title: "Mastering React Hooks",
    description: "Learn how to effectively use React hooks to manage state and side effects...",
    link: "/blog/mastering-react-hooks",
    img: "https://via.placeholder.com/500x300?text=React+Hooks",
    tags: ["React", "Hooks", "Web Development"],
  },
  {
    title: "Why Use Git for Version Control?",
    description: "Git is essential for managing code versions and collaborating with teams...",
    link: "/blog/why-use-git-for-version-control",
    img: "https://via.placeholder.com/500x300?text=Git+Version+Control",
    tags: ["Git", "Version Control", "Collaboration"],
  },
  {
    title: "The Future of AI in Web Development",
    description: "How Artificial Intelligence is changing the landscape of web development...",
    link: "/blog/future-of-ai-in-web-development",
    img: "https://via.placeholder.com/500x300?text=AI+in+Web+Development",
    tags: ["AI", "Web Development", "Future"],
  },
  {
    title: "CSS Grid vs Flexbox: A Detailed Comparison",
    description: "Learn the difference between CSS Grid and Flexbox for responsive layouts...",
    link: "/blog/css-grid-vs-flexbox",
    img: "https://via.placeholder.com/500x300?text=CSS+Grid+vs+Flexbox",
    tags: ["CSS", "Grid", "Flexbox"],
  },
  {
    title: "Optimizing Images for Faster Websites",
    description: "Why image optimization is critical for better website performance...",
    link: "/blog/optimizing-images-for-faster-websites",
    img: "https://via.placeholder.com/500x300?text=Image+Optimization",
    tags: ["SEO", "Images", "Performance"],
  },
  {
    title: "Introduction to RESTful APIs",
    description: "A beginner’s guide to understanding RESTful APIs and how to use them...",
    link: "/blog/introduction-to-restful-apis",
    img: "https://via.placeholder.com/500x300?text=RESTful+API",
    tags: ["API", "REST", "Development"],
  },
];

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(sampleBlogs);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filtered = sampleBlogs.filter((blog) =>
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
        {filteredBlogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.img} alt={blog.title} />
            <div className="blog-details">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <div className="tags">
                {blog.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
              <a href={blog.link} className="read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;