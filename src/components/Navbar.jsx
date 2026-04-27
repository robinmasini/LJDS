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
          <img src={logo} alt="LJDS Logo" />
        </div>

        <div className={`nav-links-container ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#marques" onClick={() => setIsMenuOpen(false)}>Marques</a></li>
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
            <li><a href="#white-label" onClick={() => setIsMenuOpen(false)}>Marques blanches</a></li>
            <li><a href="#travailler-avec-ljds" onClick={() => setIsMenuOpen(false)}>Travailler avec LJDS</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>À propos</a></li>
            <li><a href="#contact" className="btn-secondary" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
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
