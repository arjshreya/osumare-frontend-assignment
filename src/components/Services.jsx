import React from "react";
import "./Services.css";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
const Services = () => {
  return (
    <section className="services">
      <h2>Transform Your Productivity with Our Innovative To-Do List Features</h2>
    
      <div className="service-grid">
        <div className="service-card">
          <img src={service1} alt="Task Management" />
          <h3>User-Friendly Interface</h3>
          <p>Our platform offers seamless task management to bbost your efficiency.</p>
        </div>

        <div className="service-card">
          <img src={service2} alt="Reminders" />
          <h3>Collaborate & Share Effortlessly</h3>
          <p>Invite team members to work together and achieve your goals faster.</p>
        </div>

        <div className="service-card">
          <img src={service3} alt="Analytics" />
          <h3>Effortless Collaboration</h3>
          <p>Invite team members to work together and achieve your goals faster.</p>
        </div>
        <div className="service-card">
          <img src={service4} alt="Analytics" />
          <h3>Seamless Access</h3>
          <p>Stay connected and manage your tasks on the go with ease.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
