// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="inner">
        <a href="#hero" className="logo">
          Logo
        </a>
        <nav className="desktop"></nav>
        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
