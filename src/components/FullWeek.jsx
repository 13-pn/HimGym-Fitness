import { useState } from "react";
import "./FullWeek.css";

export default function FullWeek() {
  const [activeDay, setActiveDay] = useState("monday");

  const days = [
    { key: "monday", label: "Monday" },
    { key: "tuesday", label: "Tuesday" },
    { key: "wednesday", label: "Wednesday" },
    { key: "thursday", label: "Thursday" },
    { key: "friday", label: "Friday" },
    { key: "saturday", label: "Saturday" }
  ];

  const workouts = {
    monday: {
      title: "Chest & Triceps",
      exercises: [
        {
          name: "Barbell Bench Press",
          img: "/WS/Monday/i1.jpg",
          sets: "4 x 10",
          description: "A classic compound movement that builds upper-body pushing strength and chest mass.",
        },
        {
          name: "Incline Dumbbell Press",
          img: "/WS/Monday/i2.jpg",
          sets: "3 x 12",
          description: "Targets the upper chest and helps balance strength between sides.",
        },
        {
          name: "Cable Chest Fly",
          img: "/WS/Monday/i3.webp",
          sets: "4 x 12",
          description: "Isolates the chest muscles for improved definition and shape.",
        },
      ],
    },
    tuesday: {
      title: "Back & Biceps",
      exercises: [
        {
          name: "Pull-Ups",
          img: "/WS/Tuesday/i1.avif",
          sets: "3 x 10",
          description: "Develops back width and bicep strength using your bodyweight.",
        },
        {
          name: "Barbell Rows",
          img: "/WS/Tuesday/i2.avif",
          sets: "4 x 10",
          description: "Builds a strong, thick back and improves posture.",
        },
        {
          name: "Hammer Curls",
          img: "/WS/Tuesday/i3.avif",
          sets: "3 x 15",
          description: "Focuses on the brachialis muscle for thicker arms.",
        },
      ],
    },
    wednesday: {
      title: "Leg Day",
      exercises: [
        {
          name: "Squats",
          img: "/WS/WED/i1.avif",
          sets: "4 x 10",
          description: "The king of leg exercises, builds strength and power in the lower body.",
        },
        {
          name: "Lunges",
          img: "/WS/WED/i2.avif",
          sets: "3 x 12",
          description: "Improves balance, coordination, and unilateral leg strength.",
        },
        {
          name: "Calf Raises",
          img: "WS/WED/i3.avif",
          sets: "4 x 20",
          description: "Targets calf muscles for strength and definition.",
        },
      ],
    },
    thursday: {
      title: "Shoulders",
      exercises: [
        {
          name: "Overhead Press",
          img: "/WS/TH/i1.avif",
          sets: "4 x 10",
          description: "Builds strong, well-rounded shoulders and improves overhead strength.",
        },
        {
          name: "Lateral Raises",
          img: "/WS/TH/i2.avif",
          sets: "3 x 15",
          description: "Isolates the side delts for that wide-shoulder look.",
        },
        {
          name: "Rear Delt Fly",
          img: "/WS/TH/i3.avif",
          sets: "3 x 15",
          description: "Balances the shoulder and improves posture by targeting rear delts.",
        },
      ],
    },
    friday: {
      title: "Core & Abs",
      exercises: [
        {
          name: "Plank",
          img: "/WS/Fri/i1.avif",
          sets: "3 x 60s",
          description: "Engages the entire core for stability and endurance.",
        },
        {
          name: "Hanging Leg Raises",
          img: "/WS/Fri/i2.avif",
          sets: "4 x 12",
          description: "Targets the lower abs for a strong, defined midsection.",
        },
        {
          name: "Russian Twists",
          img: "/WS/Fri/i3.avif",
          sets: "3 x 20",
          description: "Improves oblique strength and core rotation control.",
        },
      ],
    },
    saturday: {
      title: "Full Body Functional",
      exercises: [
        {
          name: "Deadlifts",
          img: "/WS/Sat/i1.avif",
          sets: "4 x 8",
          description: "A full-body powerhouse exercise improving strength and posture.",
        },
        {
          name: "Burpees",
          img: "/WS/Sat/i2.avif",
          sets: "3 x 20",
          description: "Great for endurance and total-body conditioning.",
        },
        {
          name: "Kettlebell Swings",
          img: "/WS/Sat/i3.avif",
          sets: "4 x 15",
          description: "Boosts power output and strengthens the posterior chain.",
        },
      ],
    },
  };

  return (
    <section className="fullweek">
      <h1>🏋️ Full Week Workout Schedule</h1>

      <div className="day-buttons">
        {days.map((day) => (
          <button
            key={day.key}
            className={activeDay === day.key ? "active" : ""}
            onClick={() => setActiveDay(day.key)}
          >
            {day.label}
          </button>
        ))}
      </div>

      <h2>{workouts[activeDay].title}</h2>

      <div className="exercise-grid">
        {workouts[activeDay].exercises.map((ex, i) => (
          <div className="exercise-card" key={i}>
            <img src={ex.img} alt={ex.name} />
            <div className="exercise-info">
              <h3>{ex.name}</h3>
              <p className="sets">{ex.sets}</p>
              <p className="desc">{ex.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
