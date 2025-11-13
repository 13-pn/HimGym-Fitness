import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Benefits.css";

const Benefit = () => {
  const location = useLocation();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  const benefits = [
    {
      title: "Instructional Videos",
      desc: "Fitness Care trainers provide printable calendars to keep you organized and motivated through each program. Cross off one day at a time and see how far you've come!",
      img: "Benefits/B1.png",
    },
    {
      title: "Training Calendars",
      desc: "No training program is complete without a meal plan. Our trainers provide recipes and weekly meal plans to keep you on track.",
      img: "Benefits/B4.png",
    },
    {
      title: "Mobile App & Free WiFi",
      desc: "Choose your perfect workout plan and track progress anytime with our upcoming mobile app. Fitness in your palm, plus free WiFi access!",
      img: "Benefits/B3.png",
    },
    {
      title: "Community Support",
      desc: "Find friends and like-minded fitness buffs on BodySpace! With an army of supporters, you'll never train alone.",
      img: "Benefits/B2.png",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            entry.target.classList.remove("fade-out");
            const textEls = entry.target.querySelectorAll(".typewriter-text");
            textEls.forEach((el) => {
              el.classList.remove("typing");
              void el.offsetWidth; // force reflow
              el.classList.add("typing");
            });
          } else {
            entry.target.classList.remove("fade-in");
            entry.target.classList.add("fade-out");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [titleRef.current, ...cardRefs.current];
    elements.forEach((el) => el && observer.observe(el));

    return () => elements.forEach((el) => el && observer.unobserve(el));
  }, [location.pathname]);

  return (
    <section className="benefit-section" ref={sectionRef}>
      <h2
        ref={titleRef}
        className="benefit-title typewriter-text typing"
>
        Benefits of Fitness Care GYM
      </h2>


      <div className="benefit-grid">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="benefit-card"
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="benefit-img-container">
              <img src={item.img} alt={item.title} className="benefit-img" />
            </div>
            <div className="benefit-content">
              <h3 className="benefit-heading typewriter-text">{item.title}</h3>
              <p className="benefit-desc typewriter-text">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefit;