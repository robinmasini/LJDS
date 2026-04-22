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
            <li><a href="#marques" onClick={() => setIsMenuOpen(false)}>Marques</a></li>
            <li><a href="#marques-blanches" onClick={() => setIsMenuOpen(false)}>Marques blanches</a></li>
            <li><a href="#travailler-avec-ljdm" onClick={() => setIsMenuOpen(false)}>Travailler avec LJDM</a></li>
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
