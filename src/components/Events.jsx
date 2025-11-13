import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Events.css";

const Events = () => {
  const events = [
    {
      title: "8-Week’s Weight Loss Challenge",
      date: "20 Feb | 16:00 - 20:00",
      desc: "Perfect to do with your family, friends, or co-workers — anyone who wants to get fit and lose weight in a healthy way!",
    },
    {
      title: "10 Best Muscle-Building Biceps Exercises",
      date: "21 Feb | 15:00 - 18:00",
      desc: "Join this strength-focused workshop and learn the best biceps routines to maximize your muscle growth naturally.",
    },
    {
      title: "Score More: Two Proven Muscle Recovery Tips",
      date: "22 Feb | 14:00 - 17:00",
      desc: "Learn smart recovery methods to speed up muscle healing and performance improvement.",
    },
    {
      title: "9 Ways You're Sabotaging Your Fat Loss",
      date: "23 Feb | 16:00 - 19:00",
      desc: "Discover small habits that slow your fat loss and how to fix them for better results.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % events.length),
      5000
    );
    return () => clearInterval(interval);
  }, [events.length]);

  return (
    <section className="events-section">
      <div className="overlay"></div>

      <div className="events-content">
        {events.map((event, i) => (
          <div
            key={i}
            className={`event-slide ${i === index ? "active" : "inactive"}`}
          >
            <h2>{event.title}</h2>
            <p className="date">{event.date}</p>
            <p className="desc">{event.desc}</p>
            <div className="buttons">
              <Link to="Register"><button className="btn buy">Buy Now</button></Link>
            </div>
          </div>
        ))}

        <div className="dots">
          {events.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
