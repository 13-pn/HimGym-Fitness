import React from "react";
import "./QuickLinkes.css";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const QuickLinks = () => {
  return (
    <section className="quicklinks-wrapper">
      <h1 className="quicklinks-heading">Stay Connected With Us</h1>

      <div className="quicklinks-container">
        <div className="card-box map-container">
          <iframe
            className="map"
            title="HimGym's Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492.583060033814!2d78.94905347488564!3d29.196562062381723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a04b3e55f2b7f%3A0x6c8208e7810dfb7e!2sSainik%20Colony%2C%20Neejhra%2C%20Kashipur%2C%20Uttarakhand%20244713!5e0!3m2!1sen!2sin!4v1730201234567!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="card-box contact-box">
          <h2 className="box-title">Contact Us</h2>
          <div className="contact-info">
            <p>
              <MapPin size={20} /> Address: Sainik Colony, Neejhra, Kashipur, Uttarakhand – 244713
            </p>
            <p>
              <Phone size={20} /> +91 8859647163, +91 7409066178
            </p>
            <p>
              <Mail size={20} /> himalayantechnosoft@gmail.com
            </p>
            <p>
              <Clock size={20} /> Week Days: 05:00 – 22:00 <br />
              Saturday: 08:00 – 18:00 <br />
              Sunday: 08:00 – 12:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
