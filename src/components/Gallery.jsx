import React from 'react';
import './Gallery.css';

import img1 from '../assets/Capture d’écran 2026-04-22 à 20.30.35.png';
import img2 from '../assets/Capture d’écran 2026-04-22 à 20.30.50.png';
import img3 from '../assets/Capture d’écran 2026-04-22 à 20.30.57.png';
import img4 from '../assets/Capture d’écran 2026-04-22 à 20.31.07.png';
import img5 from '../assets/Capture d’écran 2026-04-22 à 20.31.14.png';
import img6 from '../assets/Capture d’écran 2026-04-22 à 20.31.21.png';
import img7 from '../assets/Capture d’écran 2026-04-22 à 20.31.54.png';
import img8 from '../assets/Capture d’écran 2026-04-22 à 20.32.01.png';
import img9 from '../assets/Capture d’écran 2026-04-22 à 20.32.08.png';
import img10 from '../assets/Capture d’écran 2026-04-22 à 20.32.17.png';
import img11 from '../assets/Capture d’écran 2026-04-22 à 20.32.22.png';
import img12 from '../assets/Capture d’écran 2026-04-22 à 20.32.28.png';

const screenshots = [
  { src: img1, alt: 'Interface LJDS Dashboard' },
  { src: img2, alt: 'Vue détaillée LJDS' },
  { src: img3, alt: 'Aperçu Plateforme LJDS' },
  { src: img4, alt: 'Fonctionnalités LJDS' },
  { src: img5, alt: 'Interface utilisateur LJDS' },
  { src: img6, alt: 'Statistiques LJDS' },
  { src: img7, alt: 'Gestion des stocks' },
  { src: img8, alt: 'Suivi logistique' },
  { src: img9, alt: 'Catalogue fournisseurs' },
  { src: img10, alt: 'Analyse des ventes' },
  { src: img11, alt: 'Configuration système' },
  { src: img12, alt: 'Support technique' }
];

const Gallery = () => {
  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <h2>Découvrez l'Interface LJDS</h2>
          <p>Un aperçu de notre plateforme performante et intuitive, conçue pour les professionnels.</p>
        </div>
        
        <div className="gallery-grid">
          {screenshots.map((item, index) => (
            <div className="gallery-item" key={index}>
              <div className="gallery-image-wrapper glass-card">
                <img src={item.src} alt={item.alt} className="gallery-image" />
                <div className="gallery-overlay">
                  <span>{item.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
