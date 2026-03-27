import React from 'react';
import './Footer.css';
import logo from '../assets/ljds.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="logo">
                            <img src={logo} alt="LJDS Logo" height="40" />
                        </div>
                        <p>La solution numérique numéro 1 d'importation alimentaire à l'échelle internationale.</p>
                    </div>
                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Plateforme</h4>
                            <a href="#">Comment ça marche</a>
                            <a href="#">Fournisseurs</a>
                            <a href="#">Marque Blanche</a>
                        </div>
                        <div className="link-group">
                            <h4>Société</h4>
                            <a href="#">À propos</a>
                            <a href="#">Blog</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 LesJardinsDuSud (LJDS). Tous droits réservés.</p>
                    <div className="socials">
                        <a href="#">LinkedIn</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
