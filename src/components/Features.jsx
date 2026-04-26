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
                <div className="features-header">
                    <h2>Nos Services</h2>
                </div>
                <div className="services-content">
                    <div className="service-text-block glass-card">
                        <p>
                            LJDS propose une gamme complète de services destinés à soutenir les magasins et les chaînes de magasins dans leur activité quotidienne. L’un des piliers de cette offre est la gestion et la sécurisation des approvisionnements. Grâce à une veille permanente des marchés et à des relations directes avec les producteurs, LJDS contribue à maintenir les niveaux de stock et à assurer la disponibilité des produits en rayon.
                        </p>
                    </div>
                    <div className="service-text-block glass-card">
                        <p>
                            En cas de pénurie ou de perturbation de la chaîne d’approvisionnement, LJDS intervient comme un véritable partenaire de résolution de problèmes. Son réseau international permet d’identifier rapidement des alternatives fiables, tout en respectant le positionnement et les exigences de qualité du client. Cette approche proactive limite les ruptures et garantit la continuité des ventes.
                        </p>
                    </div>
                    <div className="service-text-block glass-card">
                        <p>
                            Par ailleurs, LJDS accompagne ses clients dans l’optimisation de leurs processus d’achat. En combinant volume, expertise marché et négociation, l’entreprise améliore l’efficacité des achats et les conditions tarifaires. Enfin, LJDS développe des solutions de white label et intègre de nouvelles technologies afin d’aider les retailers à enrichir leur assortiment et à augmenter leurs ventes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
