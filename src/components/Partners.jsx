import React from 'react';
import './Partners.css';

const Partners = () => {
    return (
        <section className="partners" id="travailler-avec-ljds">
            <div className="container">
                <div className="partners-card glass-card">
                    <h2>Travailler avec LJDS</h2>
                    <div className="partners-content">
                        <p>
                            LJDS s’appuie sur un réseau international d’agents et continue de l’élargir. Nous invitons les professionnels expérimentés du secteur food & beverage à prendre contact avec nous s’ils souhaitent rejoindre notre réseau en tant qu’agent.
                        </p>
                        <p>
                            Cette structure d’agence permet de travailler de manière indépendante tout en bénéficiant du soutien, des produits et du savoir-faire de LJDS. Ensemble, nous développons des relations durables avec les retailers et créons des opportunités commerciales à long terme sur différents marchés.
                        </p>
                        <button className="btn-primary">Rejoindre le réseau</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
