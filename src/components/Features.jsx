import React from 'react';
import './Features.css';

const Features = () => {
    const features = [
        {
            title: "Portefeuille Fournisseurs",
            description: "Accédez à plus de 1500 fournisseurs certifiés à travers le monde, sélectionnés pour leur qualité.",
            icon: "🌍"
        },
        {
            title: "Importation Soignée",
            description: "Chaque produit est suivi et contrôlé pour garantir une fraîcheur et une conformité totale.",
            icon: "📦"
        },
        {
            title: "Numéro 1 Digital",
            description: "Une plateforme unique pour gérer vos commandes, suivis et paiements internationaux.",
            icon: "📈"
        }
    ];

    return (
        <section className="features" id="services">
            <div className="container">
                <div className="features-grid">
                    {features.map((f, i) => (
                        <div key={i} className="feature-card glass-card">
                            <div className="feature-icon">{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
