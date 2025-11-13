import React, { useState, useEffect } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const quotes = [
    "Push yourself because no one else is going to do it for you.",
    "Train insane or remain the same.",
    "The pain you feel today will be the strength you feel tomorrow.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <div className="hero-wrapper">
      <video
        className="hero-video"
        src="/HeroImg/herovd.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="hero-overlay">
        <div className="hero-slider">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className={`hero-quote-slide ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <h1 className="hero-quote-text">{quote}</h1>
            </div>
          ))}
        </div>

        <div className="dots-container">
          {quotes.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active-dot" : ""}`}
            ></span>
          ))}
        </div>

        <Link to="/Register"><button className="join-btn">Join Now</button></Link>
      </div>
    </div>
  );
};

export default Hero;
