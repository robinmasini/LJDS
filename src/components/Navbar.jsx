import React from 'react';
import './Navbar.css';
import logo from '../assets/ljds.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="LJDS Logo" height="40" />
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
