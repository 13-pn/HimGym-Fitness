import React from "react";
import "./Trainers.css";

const Trainers = () => {
  const trainers = [
    {
      name: "Stepthen Adams",
      role: "CEO & Fitness Instructor",
      email: "Support&Healtcare.com",
      phone: "0422-2342134",
      experience: "4+ Years",
      about:
        "Fitness & Body builders spend years, even decades, perfecting the human form. You may not want that extreme, but you can still bring discipline into your routine.",
      img: "/trainers/trainer1.jpg",
    },
    {
      name: "Ashley Fletcher",
      role: "Fitness & Yoga Instructor",
      email: "Support&Healtcare.com",
      phone: "0422-2342134",
      experience: "4+ Years",
      about:
        "Fitness & Yoga experts bring balance and mindfulness into every session. Incorporate yoga principles for strength, peace, and posture improvement.",
      img: "/trainers/trainer2.jpg",
    },
    {
      name: "Ben Johnson",
      role: "Pro Body Builder",
      email: "Support&Healtcare.com",
      phone: "0422-2342134",
      experience: "4+ Years",
      about:
        "Dedicated body builder focusing on strength and endurance. Helps you reach peak muscle growth and fitness goals with expert techniques.",
      img: "/trainers/trainer3.jpg",
    },
    {
      name: "Rebecca Garza",
      role: "Fitness & Body Builder",
      email: "Support&Healtcare.com",
      phone: "0422-2342134",
      experience: "4+ Years",
      about:
        "Motivated trainer with a passion for health, strength, and confidence. She blends power training and body sculpting for effective transformation.",
      img: "/trainers/trainer4.jpg",
    },
  ];

  return (
    <div className="trainers-section">
      <h1 className="trainers-title">Our Experienced Trainers</h1>

      <div className="trainers-grid">
        {trainers.map((t, index) => (
          <div className="trainer-card" key={index}>
            <div className="trainer-img">
              <img src={t.img} alt={t.name} />
            </div>

            <div className="trainer-info">
              <h2>{t.name}</h2>
              <h4>{t.role}</h4>
              <p className="trainer-about">{t.about}</p>
              <div className="trainer-details">
                <p><strong>Email:</strong> {t.email}</p>
                <p><strong>Phone:</strong> {t.phone}</p>
                <p><strong>Practising:</strong> {t.experience}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
