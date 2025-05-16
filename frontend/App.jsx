import React from 'react';
import AnnonceCard from './example-page/AnnonceCard';

const App = () => {
    const annonces = [
        { title: "Vélo d'occasion", price: 80, location: "Paris" },
        { title: "Canapé convertible", price: 150, location: "Lyon" },
        { title: "iPhone 12", price: 500, location: "Marseille" },
    ];

    return (
        <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
            <h1>Annonces VendreFacile</h1>
            {annonces.map((annonce, index) => (
                <AnnonceCard key={index} {...annonce} />
            ))}
        </div>
    );
};

export default App;
