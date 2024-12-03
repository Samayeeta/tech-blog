import React, { useState } from 'react';

const SubmitBlog = () => {
  // State to hold the form data
  const [formData, setFormData] = useState({
    firstName: '',   // First Name
    lastName: '',    // Last Name
    email: '',       // Email
    title: '',       // Blog Title
    difficulty: '',  // Difficulty level (optional)
    content: '',     // Blog content
    tags: '',        // Tags (comma-separated)
    file: null,      // File (optional)
  });

  // State to hold success or error messages
  const [message, setMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // Update formData state based on the input field name
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // If the input is a file, get the first file, else get the value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Create a new FormData object to send data as multipart/form-data
    const data = new FormData();
    data.append('firstName', formData.firstName);
    data.append('lastName', formData.lastName);
    data.append('email', formData.email);
    data.append('title', formData.title);
    data.append('difficulty', formData.difficulty);
    data.append('content', formData.content);
    data.append('tags', formData.tags);
    
    // If a file is provided, append it to FormData
    if (formData.file) {
      data.append('file', formData.file);
    }

    // Send the FormData as a POST request to the Flask backend
    fetch('http://127.0.0.1:5000/submit-blog', {
      method: 'POST',
      body: data, // Send FormData as the request body
    })
      .then(response => response.json()) // Parse JSON response from the backend
      .then(data => {
        console.log('Success:', data); // Handle successful submission
        setMessage('Blog submitted successfully!'); // Show success message
      })
      .catch(error => {
        console.error('Error:', error); // Handle errors
        setMessage('Error submitting the blog. Please try again.'); // Show error message
      });
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h1>Submit a Blog</h1>
        {/* The form where users will enter their blog details */}
        <form onSubmit={handleSubmit}>
          {/* Input field for First Name */}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          
          {/* Input field for Last Name */}
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          
          {/* File input to upload files (doc, docx, or pdf) */}
          <input
            type="file"
            name="file"
            accept=".doc,.docx,.pdf"
            onChange={handleChange}
          />
          
          {/* Input field for Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          {/* Input field for Blog Title */}
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          
          {/* Textarea for Blog Content */}
          <textarea
            name="content"
            placeholder="Blog Content"
            value={formData.content}
            onChange={handleChange}
            required
          />
          
          {/* Input field for Tags (comma-separated) */}
          <input
            type="text"
            name="tags"
            placeholder="Tags (comma-separated)"
            value={formData.tags}
            onChange={handleChange}
          />
          
          {/* Submit button to submit the form */}
          <button type="submit">Submit</button>
        </form>

        {/* Display message after submission */}
        {message && <div className="submit-message">{message}</div>}
      </div>
    </div>
  );
};

export default SubmitBlog;
