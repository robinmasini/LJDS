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
                    <h2>Propulsez votre marque avec LJDS</h2>
                    <p>
                        Notre solution de <strong>Marque Blanche</strong> vous permet d'intégrer notre
                        vaste portefeuille de fournisseurs et notre logistique internationale sous
                        votre propre identité. Une solution clé en main pour les distributeurs.
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
