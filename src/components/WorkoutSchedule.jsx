import React, { useEffect, useRef } from "react";
import "./WorkoutSchedule.css";
import { Link } from "react-router-dom";

const WorkoutSchedule = () => {
  const workouts = [
    {
      day: "01",
      title: "Chest & Triceps (Body Building)",
      image: "WS/ws.png",
      details: {
        Chest: [
          "Incline Dumbbell Press, Flat Bench Barbell Press, Incline Dumbbell Flies & Cable Crossovers",
        ],
        Triceps: ["Pushdowns, Extensions using a rope"],
      },
    },
    {
      day: "02",
      title: "Back & Biceps (Athletics)",
      image: "WS/day2.png",
      details: {
        Back: [
          "Lat machine pulldowns, Close grip pulldowns, Seated cable rows, Hyper-extensions.",
        ],
        Biceps: ["Incline dumbbell curls, Standing barbell curls."],
      },
    },
    {
      day: "03",
      title: "Shoulders & Biceps (Fitness)",
      image: "WS/day3.png",
      details: {
        Shoulders: ["Barbell press, Upright rows with barbell, Front raises."],
        Biceps: ["Incline dumbbell curls, Standing barbell curls"],
      },
    },
    {
      day: "04",
      title: "Legs & Core (Strength)",
      image: "WS/day4.png",
      details: {
        Legs: ["Squats, Leg press, Lunges, Leg extensions"],
        Core: ["Hanging leg raises, Plank hold"],
      },
    },
    {
      day: "05",
      title: "Cardio & Abs (Endurance)",
      image: "WS/day5.png",
      details: {
        Cardio: ["Treadmill running, Cycling - 15 minutes, Jump rope."],
        Abs: ["Crunches, Leg raises, Russian twists."],
      },
    },
    {
      day: "06",
      title: "Full Body (Power)",
      image: "WS/day6.png",
      details: {
        Routine: ["Deadlifts, Push press, Pull-ups, Burpees"],
        Meditation: [
          "Breathing and focus meditation, Guided relaxation for stress release, Mindful cooldown with soft music.",
        ],
      },
    },
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-card");
        } else {
          entry.target.classList.remove("show-card");
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px' 
    }
  );

  cardsRef.current.forEach((card) => card && observer.observe(card));
  return () => cardsRef.current.forEach((card) => card && observer.unobserve(card));
}, []);

  return (
    <section className="workout-section">
      <h2 className="workout-title">Weekly Workout Schedule</h2>
      <div className="workout-grid">
        {workouts.map((workout, index) => (
          <div
            className="workout-card"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="workout-img-container">
              <img
                src={workout.image}
                alt={workout.title}
                className="workout-img"
              />
              <div className="workout-day">Day {workout.day}</div>
            </div>

            <div className="workout-content">
              <h3 className="workout-heading">{workout.title}</h3>

              <div className="workout-details">
                {Object.entries(workout.details).map(([section, exercises]) => (
                  <div key={section}>
                    <h4>{section}:</h4>
                    <ul>
                      {exercises.map((ex, i) => (
                        <li key={i}>{ex}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Link to="/FullWeek"><button className="workout-btn">View Exercise Plans</button></Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkoutSchedule;
