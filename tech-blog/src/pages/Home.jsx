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
