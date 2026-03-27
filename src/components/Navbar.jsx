import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          {/* Logo placeholder - using the primary and secondary colors */}
          <span className="logo-lj">LJ</span>
          <span className="logo-ds">DS</span>
        </div>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portefeuille</a></li>
          <li><a href="#about">À propos</a></li>
          <li><button className="btn-secondary">Contact</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
