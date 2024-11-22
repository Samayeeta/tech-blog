import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">
          <span className="typewriter">Discover the Future of Tech Blogs</span>
        </h1>
        <p className="hero-subtitle slide-in">
          Stay updated with the latest trends, tutorials, and innovations in technology.
        </p>
        <button className="cta-button">Explore Blogs</button>
      </section>

      {/* Features Section */}
      <section className="features">
  <h2 className="section-title">Why Choose TechBlogs?</h2>
  <div className="features-grid">
    <div className="feature-card">
      <img src="./assets/community.jpg" alt="Feature Image" />
      <h3>Lightning-Fast Search</h3>
      <p>Find the exact blog you need with blazing-fast search capabilities.</p>
    </div>
    <div className="feature-card">
      <img src="./assets/community.jpg" alt="Feature Image" />
      <h3>Customizable Categories</h3>
      <p>Personalize your feed with tags and categories tailored to your interests.</p>
    </div>
    <div className="feature-card">
      <img src="./assets/community.jpg" alt="Feature Image" />
      <h3>Community-Driven</h3>
      <p>Engage with a tech-savvy community and share your insights.</p>
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="testimonials-grid">
          <blockquote className="testimonial">
            "TechBlogs keeps me up-to-date with the latest trends. It’s a game-changer for tech enthusiasts!"
            <cite>- Alex Johnson, Developer</cite>
          </blockquote>
          <blockquote className="testimonial">
            "The community is vibrant and inspiring. I’ve learned so much from the blogs here!"
            <cite>- Priya Mehta, Data Scientist</cite>
          </blockquote>
        </div>
      </section>


      <section className="about-techblogs">
  <h2 className="section-title1">About TechBlogs</h2>
  <div className="about-content">
    <p>
      Welcome to <strong>TechBlogs</strong> — your ultimate destination for insightful articles, tutorials, and the latest trends in technology. 
      Our mission is to empower tech enthusiasts with quality content that inspires innovation and enhances learning.
    </p>
    <ul className="about-highlights">
      <li><strong>Expert Writers:</strong> Blogs crafted by industry professionals and tech enthusiasts.</li>
      <li><strong>Diverse Topics:</strong> From AI to web development, find content tailored to your interests.</li>
      <li><strong>Engaging Community:</strong> Share your ideas, ask questions, and grow together.</li>
    </ul>
    <p>Join us and be a part of a growing tech-savvy community!</p>
  </div>
</section>


      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 TechBlogs. All rights reserved.</p>
        <div className="social-links">
          <a href="#">Twitter</a> | <a href="#">LinkedIn</a> | <a href="#">GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
