import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
        const data = await response.json();
        if (data.status === "success") {
          setBlog(data.data);
        } else {
          setError(data.message || "Failed to fetch blog");
        }
      } catch (error) {
        setError("Error fetching blog: " + error.message);
      }
    };
    fetchBlog();
  }, [id]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!blog) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <div className="blog-details-page">
      {/* Title Section */}
      <div className="blog-title-section">
        <h1 className="blog-title">{blog.title}</h1>
        <div className="blog-author">
          <strong>Written by:</strong> {blog.firstName} {blog.lastName}
        </div>
      </div>

      {/* Content Section */}
      <div className="blog-content">
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
