import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import facebookIcon from "../assets/facebookIcon.png";
import instagramIcon from "../assets/instagramIcon.png";
import xIcon from "../assets/XIcon.png"; 
import linkedinIcon from "../assets/linkedInIcon.png";
import youtubeIcon from "../assets/youtubeIcon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <img src={logo} alt="doList Logo" className="footer-logo" />
          <h2>
            do<span>List</span>
          </h2>
          <p className="brand-desc">
            Simplify your life and organize your world with doList.
          </p>

          <div className="join-section">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
            />
            <button className="btn-join">Join</button>
          </div>
        </div>

        
        <div className="footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>Home Page</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog Posts</li>
            <li>FAQs</li>
          </ul>
        </div>

        
        <div className="footer-resources">
          <h4>Resources</h4>
          <ul>
            <li>Help Center</li>
            <li>User Guide</li>
            <li>Community Forum</li>
            <li>Feedback</li>
            <li>Support</li>
          </ul>
        </div>

        
        <div className="footer-social">
          <h4>Connect With Us</h4>
          <div className="social-list">
            <div className="social-item">
              <img src={facebookIcon} alt="Facebook" />
              <p>Facebook</p>
            </div>
            <div className="social-item">
              <img src={instagramIcon} alt="Instagram" />
              <p>Instagram</p>
            </div>
            <div className="social-item">
              <img src={xIcon} alt="X" />
              <p>X (Twitter)</p>
            </div>
            <div className="social-item">
              <img src={linkedinIcon} alt="LinkedIn" />
              <p>LinkedIn</p>
            </div>
            <div className="social-item">
              <img src={youtubeIcon} alt="YouTube" />
              <p>YouTube</p>
            </div>
          </div>
        </div>
      </div>

    
      <div className="footer-divider"></div>

      
      <div className="footer-bottom">
        <p className="copyright">© 2025 doList. All Rights Reserved.</p>
        <div className="footer-links-bottom">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
