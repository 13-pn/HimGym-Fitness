import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar-section">
      <div className="logo">
        <img src="/Logo/fnlogo.png" alt="Logo" />
      </div>

      <ul className="nav-links">
         <li><Link to="/">Home</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="nav-btn">
        <Link to="/Register"><button>Register now</button></Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <ul>
          <li><a href="#Home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#Services" onClick={toggleMenu}>Services</a></li>
          <li><a href="#About" onClick={toggleMenu}>About</a></li>
          <li><a href="#Contact" onClick={toggleMenu}>Contact</a></li>
          <li><button className="mobile-register-btn">Register now</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
