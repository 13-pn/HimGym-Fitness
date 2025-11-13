import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2 className="about-title">About <span>HimGym Fitness</span></h2>
          <p className="about-description">
            At <strong>HimGym Fitness</strong>, we believe fitness is not just about lifting weights — 
            it’s about transforming your body, mind, and lifestyle. 
            Our expert trainers, world-class equipment, and motivating environment 
            are designed to help you achieve your goals faster and smarter.
          </p>
          <p className="about-description">
            Whether you’re a beginner or a pro athlete, we have customized programs 
            that fit your needs — from strength training and cardio to yoga and endurance sessions.
          </p>
          <Link to="/Register"><button className="about-btn">Join Our Family</button></Link>
        </div>

        <div className="about-image">
          <img src="/Logo/fnlogo.png" alt="About HimGym" />
        </div>
      </div>
    </section>
  );
};

export default About;
