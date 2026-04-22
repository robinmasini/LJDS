import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero-bg.png';
import logo from '../assets/LJDS.png';

const Hero = () => {
    return (
        <section className="hero">
            <img className="hero-video" src={heroBg} alt="Hero Background" />
            <div className="hero-overlay"></div>

            <div className="container">
                <div className="hero-card">
                    <div className="hero-logo">
                        <img src={logo} alt="LJDS Logo" />
                    </div>
                    <h1 className="hero-title">
                        Maximisez la valeur de votre importation
                    </h1>
                    <p className="hero-description">
                        La solution numérique numéro 1 d'importation alimentaire à l'échelle internationale.
                        Une expertise soignée, un portefeuille fournisseur unique et une logistique sans frontières
                        pour les professionnels exigeants.
                    </p>
                    <div className="hero-ctas">
                        <button className="btn-primary">Prendre RDV avec un expert</button>
                        <div className="hero-rating">
                            <span className="stars">★★★★★</span>
                            <span className="rating-text">Solution de confiance pour +500 distributeurs</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
