import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import './WhiteLabel.css';

const WhiteLabel = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Attempt to insert into 'leads' table. 
        // Note: User needs to create this table in Supabase or I can provide the SQL.
        const { error } = await supabase
            .from('leads')
            .insert([{ email, type: 'white_label' }]);

        if (error) {
            console.error('Error:', error);
            alert('Une erreur est survenue. Veuillez réessayer.');
        } else {
            setSubmitted(true);
        }
        setLoading(false);
    };

    return (
        <section className="white-label" id="white-label">
            <div className="container">
                <div className="white-label-content">
                    <div className="badge">PARTENARIAT EXCLUSIF</div>
                    <h2>Marques blanches</h2>
                    <p>
                        Elle constitue un axe stratégique majeur de l’activité de LJDS. De plus en plus de retailers choisissent de développer leur propre marque afin de se différencier, de renforcer leur image et d’améliorer leurs marges. LJDS accompagne ses partenaires tout au long de ce processus, de la sélection des produits jusqu’à leur mise sur le marché.
                    </p>
                    <p>
                        Grâce à un sourcing international rigoureux, LJDS identifie des produits adaptés à la stratégie et au positionnement de chaque enseigne. Le développement couvre l’ensemble de la chaîne : formulation, contrôle qualité, packaging, étiquetage et logistique. Chaque projet est mené avec une attention particulière portée aux tendances du marché, aux normes en vigueur et aux objectifs commerciaux.
                    </p>
                    <p>
                        Le résultat est une offre white label cohérente, compétitive et parfaitement alignée avec l’identité de la marque du client. LJDS développe et commercialise également ses propres marques. Ces labels sont le fruit de partenariats de long terme avec des producteurs sélectionnés et d’une connaissance approfondie des origines et des marchés.
                    </p>

                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="white-label-form">
                            <input
                                type="email"
                                placeholder="Votre email professionnel"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className="btn-primary" disabled={loading}>
                                {loading ? 'Envoi...' : 'Découvrir la Marque Blanche'}
                            </button>
                        </form>
                    ) : (
                        <div className="success-message">
                            <h3>Merci de votre intérêt !</h3>
                            <p>Notre équipe vous contactera sous 24h avec notre catalogue expert.</p>
                        </div>
                    )}

                    <div className="white-label-features">
                        <div className="wl-item">
                            <span className="icon">✓</span>
                            <span>Catalogue personnalisable</span>
                        </div>
                        <div className="wl-item">
                            <span className="icon">✓</span>
                            <span>Logistique 100% transparente</span>
                        </div>
                        <div className="wl-item">
                            <span className="icon">✓</span>
                            <span>Support dédié 24/7</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhiteLabel;
