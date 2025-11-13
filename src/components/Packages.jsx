import React, { useRef } from "react";
import "./Packages.css";

const Packages = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  const packages = [
    {
      title: "Body Building ($230.99)",
      features: [
        "01 Year Training | 30 Min Session",
        "Includes: Fitness testing, Diet Plan",
        "Weekly motivation & accountability",
        "Ongoing nutrition support",
        "Training Calendars",
        "Free Wifi & Community Support",
      ],
      img: "/Packages/p1.png",
    },
    {
      title: "Athletic Training ($199.99)",
      features: [
        "06 Month Training | 45 Min Session",
        "Includes: Strength building plan",
        "Endurance & flexibility focus",
        "Personal coach support",
        "Weekly performance reports",
        "Free Nutrition Guidance",
      ],
      img: "/Packages/p2.png",
    },
    {
      title: "Weight Loss ($210.99)",
      features: [
        "03 Month Training | 1 Hr Session",
        "Includes: Cardio & HIIT plan",
        "Meal tracking & fat loss goals",
        "One-on-one coaching",
        "Motivational sessions",
        "Free App Access",
      ],
      img: "/Packages/p3.png",
    },
    {
      title: "Yoga & Meditation ($180.99)",
      features: [
        "04 Month Training | 1 Hr Session",
        "Includes: Yoga & breathing practice",
        "Calm mind & body program",
        "Personalized meditation plan",
        "Flexible schedule",
        "Free Yoga Kit",
      ],
      img: "/Packages/p4.png",
    },
    {
      title: "CrossFit Power ($250.99)",
      features: [
        "01 Year Training | 1 Hr Session",
        "Includes: High-intensity workouts",
        "Muscle gain and stamina focus",
        "Nutrition & recovery support",
        "Progress tracking system",
        "Free Gear Kit",
      ],
      img: "/Packages/p5.png",
    },
    {
      title: "Zumba & Dance Fitness ($190.99)",
      features: [
        "06 Month Program | 45 Min Session",
        "Fun dance workouts",
        "Weight loss with rhythm",
        "Flexible timing options",
        "Free community events",
        "Online class support",
      ],
      img: "/Packages/p6.png",
    },
  ];

  return (
    <div className="packages-section">
      <h1 className="packages-title">Our Health Care Packages</h1>
      <div className="packages-container">
        <button className="scroll-btn left" onClick={scrollLeft}>
          ‹
        </button>

        <div className="packages-wrapper" ref={scrollRef}>
          {packages.map((pkg, index) => (
            <div className="package-box" key={index}>
              <img src={pkg.img} alt={pkg.title} />
              <h3>{pkg.title}</h3>
              <ul>
                {pkg.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>
          ›
        </button>
      </div>
    </div>
  );
};

export default Packages;
