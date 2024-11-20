import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    backgroundColor: "#033860",
    padding: "10px 20px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
  };

  const linkStyle = {
    color: "white",
    margin: "0 15px",
    textDecoration: "none",
    fontFamily: "Montserrat",
    fontWeight: "500",
  };

  return (
    <div style={navStyle}>
      <h2 style={{ margin: "0", fontFamily: "Montserrat" }}>Tech Blog</h2>
      <div>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/blogs" style={linkStyle}>
          Blogs
        </Link>
        <Link to="/submit-blog" style={linkStyle}>
          Submit Blog
        </Link>
        <Link to="/signup" style={linkStyle}>
          Sign Up
        </Link>
        <Link to="/login" style={linkStyle}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
