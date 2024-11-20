import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    const layoutStyle = {
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        minHeight: "100vh", 
        fontFamily: "Montserrat", 
        backgroundColor: "#f8f9fa", 
        textAlign: "center", 
        padding: "20px", 
        margin: "0", 
        boxSizing: "border-box", 
      };

  return (
    <div>
      <Navbar />
      <div style={layoutStyle}>{children}</div>
    </div>
  );
};

export default Layout;
