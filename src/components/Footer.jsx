import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © 2025 <span className="highlight">Gold's Gym.in</span>. All Rights Reserved.
        </p>
        <div className="footer-links">
          <Link to="/terms"><a href="#" className="footer-link">Terms & Conditions</a></Link>
          <span className="divider">|</span>
          <Link to="privacy"><a href="#" className="footer-link">Privacy Policy</a></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
