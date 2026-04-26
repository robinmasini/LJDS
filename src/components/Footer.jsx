import React from 'react';
import './Footer.css';
import logo from '../assets/LJDS.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="logo">
                            <img src={logo} alt="LJDS Logo" height="50" />
                        </div>
                        <div className="footer-contact-info" id="contact">
                            <p>
                                LJDS est implantée dans le sud de la France, dans la région de Marseille. Depuis cette localisation stratégique, nous opérons à l’échelle internationale et collaborons avec des partenaires dans de nombreux pays.
                            </p>
                            <p>
                                Pour toute question, information complémentaire ou opportunité de collaboration, nous vous invitons à nous contacter.
                            </p>
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Plateforme</h4>
                            <a href="#services">Services</a>
                            <a href="#marques">Marques</a>
                            <a href="#white-label">Marques Blanches</a>
                        </div>
                        <div className="link-group">
                            <h4>Société</h4>
                            <a href="#travailler-avec-ljds">Travailler avec LJDS</a>
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
