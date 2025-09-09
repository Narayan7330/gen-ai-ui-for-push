import React from 'react';
import './navbar.css'; // Don't forget to import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Section: Logo */}
      <div className="navbar-left">
        <a href="/" className="navbar-logo">
          YourLogo
        </a>
      </div>

      {/* Middle Section: Navigation Links */}
      <div className="navbar-mid">
        {/* Changed href to scroll to the #contact ID */}
        <a href="#contact" className="nav-link">
          Contact
        </a>
        {/* Changed href to scroll to the #about ID */}
        <a href="#about" className="nav-link">
          About
        </a>
      </div>

      {/* Right Section: User Actions */}
      <div className="navbar-right">
        <a href="/register" className="nav-button register-btn">
          Register
        </a>
        <a href="/login" className="nav-button login-btn">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;