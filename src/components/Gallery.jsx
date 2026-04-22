import React from 'react';
import './Gallery.css';

import img1 from '../assets/gallery-1.png';
import img2 from '../assets/gallery-2.png';
import img3 from '../assets/gallery-3.png';
import img4 from '../assets/gallery-4.png';
import img5 from '../assets/gallery-5.png';
import img6 from '../assets/gallery-6.png';
import img7 from '../assets/gallery-7.png';
import img8 from '../assets/gallery-8.png';
import img9 from '../assets/gallery-9.png';
import img10 from '../assets/gallery-10.png';
import img11 from '../assets/gallery-11.png';
import img12 from '../assets/gallery-12.png';

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
