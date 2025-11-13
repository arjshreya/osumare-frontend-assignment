import React from "react";
import "./StartOrganizing.css";
import organizeImg from "../assets/startOrganizing.png"; 
const StartOrganizing = ({ onOpenModal }) => {
  return (
    <section className="start-section">
      <div className="start-container">
       
        <div className="start-image">
          <img src={organizeImg} alt="Organizing Tasks Illustration" />
        </div>

        
        <div className="start-content">
          <h2>Start Organizing Your Life Today</h2>
          <p>
            Join us now and transform your productivity with our intutive to-do list platform
          </p>

          <div className="start-buttons">
            <button className="btn-primary" onClick={onOpenModal}>
              Sign Up
            </button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartOrganizing;
