import React from "react";
import "./HeroSection.css";

const HeroSection = ({ onOpenModal }) => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Simplify Your Life with Our To-Do App</h1>
          <p>
            Stay organized and boost your productivity with our intuitive task
            management tools. Experience a smarter way to achieve your goals.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={onOpenModal}>
              Get Started
            </button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default HeroSection;
