import React from "react";
import "./FeatureSection.css";
import personImg from "../assets/heroPerson.png"; 
import googleLogo from "../assets/google.png";
import facebookLogo from "../assets/facebook.png";
import youtubeLogo from "../assets/youtube.png";
import pinterestLogo from "../assets/pinterest.png";
import twitchLogo from "../assets/twitch.png";


const FeatureSection = ({ onOpenModal }) => {
  return (
    <section className="feature-section">
      <div className="feature-container">

        <div className="feature-text">
          <h1>
            Organize. <br /> Achieve. <br /> Relax.
          </h1>
          <p>
            Turn clutter into clarity, chaos into control, and dreams into done.
            Bold visions into market success.
          </p>

          <div className="feature-buttons">
            <button className="btn-white" onClick={onOpenModal}>
              Get Started Today
            </button>
            <button className="btn-light">Discover Features</button>
          </div>
        </div>

        <div className="feature-image-card">
          <div className="overlay-card">
            <img src={personImg} alt="User Testimonial" />

            <div className="overlay-top">
              <h4>
                Your Tasks.
                <br />
                Our Tools.
              </h4>
            </div>

            <div className="overlay-bottom">
              <p className="person-name">Freddie Halvorson</p>
              <p className="person-role">Chief Productivity Enthusiast</p>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-logos">
        <img src={googleLogo} alt="Google" />
        <img src={facebookLogo} alt="Facebook" />
        <img src={youtubeLogo} alt="YouTube" />
        <img src={pinterestLogo} alt="Pinterest" />
        <img src={twitchLogo} alt="Twitch" />
    </div>

    </section>
  );
};

export default FeatureSection;
