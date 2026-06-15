import React, { useState, useEffect } from 'react';
import './AdminPopup.css';

const AdminPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timer;
    if (!isVisible) {
      timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="admin-popup-overlay">
      <div className="admin-popup-content">
        <button className="admin-popup-close" onClick={() => setIsVisible(false)}>
          &times;
        </button>
        <div className="admin-popup-icon">😟</div>
        <p>
          Votre accès est temporairement limité en raison d'une situation administrative en attente de régularisation.
        </p>
        <p>
          Sans cela, l'accès au site pourra être temporairement suspendu prochainement.
        </p>
        <p>
          Merci de votre compréhension.
        </p>
      </div>
    </div>
  );
};

export default AdminPopup;
