import React from "react";
import "./Contact.css";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info-box">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-description">
            Have questions or want to join our gym? Reach out — we’d love to hear from you!
          </p>

          <div className="contact-details">
            <p><MapPin size={22}/> Sainik Colony, Neejhra, Kashipur, Uttarakhand – 244713</p>
            <p><Phone size={22}/> +91 8859647163, +91 7409066178</p>
            <p><Mail size={22}/> himalayantechnosoft@gmail.com</p>
            <p><Clock size={22}/> Mon–Sat: 05:00 – 22:00 | Sun: 08:00 – 12:00</p>
          </div>
        </div>

        <div className="contact-form-box">
          <h2 className="form-title">Send Us a Message</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="HimGym Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492.583060033814!2d78.94905347488564!3d29.196562062381723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a04b3e55f2b7f%3A0x6c8208e7810dfb7e!2sSainik%20Colony%2C%20Neejhra%2C%20Kashipur%2C%20Uttarakhand%20244713!5e0!3m2!1sen!2sin!4v1730201234567!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
