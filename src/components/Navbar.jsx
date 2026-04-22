import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/LJDS.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="LJDS Logo" height="45" />
        </div>

        <div className={`nav-links-container ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
            <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portefeuille</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>À propos</a></li>
            <li><button className="btn-secondary">Contact</button></li>
          </ul>
        </div>

        <button className={`burger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
