import React from 'react';
import './Gallery.css';

import img1 from '../assets/gallery-1.png';
import img2 from '../assets/gallery-2.png';
import img3 from '../assets/gallery-3.png';
import img4 from '../assets/gallery-4.png';
import img6 from '../assets/gallery-6.png';
import img7 from '../assets/gallery-7.png';
import img8 from '../assets/gallery-8.png';
import img9 from '../assets/gallery-9.png';
import img10 from '../assets/gallery-10.png';

const screenshots = [
  { src: img1, alt: 'Interface LJDS Dashboard' },
  { src: img2, alt: 'Vue détaillée LJDS' },
  { src: img3, alt: 'Aperçu Plateforme LJDS' },
  { src: img4, alt: 'Fonctionnalités LJDS' },
  { src: img6, alt: 'Statistiques LJDS' },
  { src: img7, alt: 'Gestion des stocks' },
  { src: img8, alt: 'Suivi logistique' },
  { src: img9, alt: 'Catalogue fournisseurs' },
  { src: img10, alt: 'Analyse des ventes' }
];

const Gallery = () => {
  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <h2>Notre Philosophie & Notre Expertise</h2>
          <div className="philosophy-text">
            <p>
              LJDS est née d’une passion profonde pour le secteur food & beverage et de la conviction que des produits forts prennent leur origine à la source. Depuis le sud de la France, LJDS collabore quotidiennement avec des fournisseurs et des producteurs issus du monde entier. Grâce à des relations étroites et durables avec ces partenaires, LJDS ne se limite pas à la fourniture de produits, mais crée une véritable valeur ajoutée tout au long de la chaîne, du producteur jusqu’au point de vente.
            </p>
            <p>
              Le fondateur et directeur de LJDS possède plus de 30 ans d’expérience en tant qu’entrepreneur dans les secteurs de l’alimentaire et du retail. Au fil des décennies, il a accompagné l’évolution des marchés, les changements de comportement des consommateurs et les transformations des modèles de distribution. Cette expérience se traduit aujourd’hui par une vision pragmatique et internationale, axée sur la qualité, la fiabilité et la performance commerciale.
            </p>
            <p>
              LJDS s’appuie sur une équipe d’environ 15 collaborateurs spécialisés, réunissant des compétences en sourcing, achats, développement de produits, logistique et vente. Ensemble, ils accompagnent des magasins et des chaînes de magasins sur différents marchés, en leur proposant à la fois des produits et des services sur mesure. Cette combinaison d’expertise, de réseau et d’engagement fait de LJDS un partenaire solide et durable.
            </p>
          </div>
          
          <div className="brands-intro" id="marques">
            <h3>Nos Propres Marques</h3>
            <p>
              Sous les marques <strong>Les Jardins du Sud</strong> et <strong>Piska</strong>, LJDS propose des produits food & beverage soigneusement sélectionnés, alliant qualité, authenticité et régularité. Chaque label possède sa propre identité et son propre univers, tout en partageant les mêmes valeurs fondamentales. Vous trouverez ci-dessous un aperçu de nos labels.
            </p>
          </div>
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
