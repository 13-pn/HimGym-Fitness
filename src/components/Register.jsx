import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import "./Register.css";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "Basic Plan",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="register-success">
        <CheckCircle2 className="success-icon" />
        <h2>Payment Successful 🎉</h2>
        <p>
          Thank you, {formData.name}! Your gym membership for the{" "}
          <strong>{formData.plan}</strong> has been activated.
        </p>
      </div>
    );
  }

  return (
    <section className="register-section">
      <div className="benefits-box">
        <h2>Why Join <span>HimGym?</span></h2>
        <ul>
          <li>🏋️‍♂️ Professional trainers with years of experience</li>
          <li>🔥 Modern equipment for all workout styles</li>
          <li>💪 Personalized fitness & diet plans</li>
          <li>🎯 24/7 gym access and flexible timings</li>
          <li>🏆 Monthly transformation challenges & rewards</li>
        </ul>
      </div>

      <div className="register-box">
        <h2 className="register-title">Register & Pay Now</h2>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Select Plan</label>
            <select name="plan" value={formData.plan} onChange={handleChange}>
              <option>Basic Plan - ₹999/month</option>
              <option>Pro Plan - ₹1499/month</option>
              <option>Premium Plan - ₹1999/month</option>
            </select>
          </div>

          <div className="total-section">
            <span>Total:</span>
            <span className="total-price">
              ₹
              {formData.plan.includes("Pro")
                ? "1499"
                : formData.plan.includes("Premium")
                ? "1999"
                : "999"}
            </span>
          </div>

          <button type="submit" className="pay-btn">
            Pay Now
          </button>
        </form>
      </div>
    </section>
  );
}
