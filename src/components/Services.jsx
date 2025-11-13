import React from "react";
import "./Services.css";
import { Dumbbell, HeartPulse, StretchHorizontal, Apple, Music4, UserCheck } from "lucide-react";

const services = [
  {
    icon: <Dumbbell size={50} />,
    title: "Strength & Weight Training",
    desc: "Build muscle, burn fat, and increase endurance with our world-class strength training programs.",
  },
  {
    icon: <HeartPulse size={50} />,
    title: "CrossFit & Functional Fitness",
    desc: "Boost agility, flexibility, and overall body performance with expert-guided CrossFit sessions.",
  },
  {
    icon: <StretchHorizontal size={50} />,
    title: "Yoga & Mindfulness",
    desc: "Relax your mind and body with professional yoga classes designed for all levels.",
  },
  {
    icon: <Apple size={50} />,
    title: "Nutrition & Diet Plans",
    desc: "Get personalized diet guidance to match your body goals and boost performance naturally.",
  },
  {
    icon: <UserCheck size={50} />,
    title: "Personal Training",
    desc: "Train with certified personal coaches who create customized fitness plans for you.",
  },
  {
    icon: <Music4 size={50} />,
    title: "Dance & Zumba Classes",
    desc: "Fun and energetic dance sessions that help you burn calories while enjoying every move!",
  },
];

const Services = () => {
  return (
    <section className="services-wrapper">
      <h1 className="services-heading">Our Fitness Services</h1>

      <div className="services-container">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card ${
              index % 2 === 0 ? "slide-left" : "slide-right"
            }`}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;