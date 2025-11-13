import React from "react";
import "./Testimonial.css";
import person from "../assets/person.png"; 

const Testimonial = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonial-title">Customer Testimonials</h2>
      <p className="testimonial-subtitle">
        This tool has transformed my productivity and organization!
      </p>

      <div className="testimonial-wrapper">
       
        <div className="testimonial-card">
          <p className="testimonial-text">
            “Using this website has made my tasks so much easier! I can't imagine my day without it.”
          </p>

          <div className="testimonial-user">
            <div className="user-icon"></div>
            <div>
              <h4>Sherri Cronin</h4>
              <span>Project Manager, TechCorp</span>
            </div>
          </div>

          <div className="testimonial-buttons">
            <button className="arrow-btn">&#8249;</button>
            <button className="arrow-btn active">&#8250;</button>
          </div>
        </div>

       
        <div className="testimonial-image-box">
          <div className="image-frame"></div>
          <img src={person} alt="Customer" className="testimonial-img" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
