import React, { useState } from "react";
import Layout from "../components/Layout";

const SubmitBlog = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog Submitted:", form);
  };

  return (
    <Layout>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>Submit a Blog</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={form.title}
          onChange={handleChange}
          required
          style={{
            margin: "10px",
            padding: "10px",
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <textarea
          name="content"
          placeholder="Blog Content"
          value={form.content}
          onChange={handleChange}
          required
          style={{
            margin: "10px",
            padding: "10px",
            width: "100%",
            height: "150px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <input
          type="file"
          onChange={handleFileChange}
          required
          style={{
            margin: "10px",
            padding: "10px",
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#033860",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default SubmitBlog;
