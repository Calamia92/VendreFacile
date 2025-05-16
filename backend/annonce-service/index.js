require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const annonces = [
    { id: 1, title: 'Vélo route', price: 300, location: 'Paris' },
    { id: 2, title: 'PC Gamer', price: 800, location: 'Lyon' },
];

app.get('/annonces', (req, res) => {
    res.json(annonces);
});

app.listen(PORT, () => {
    console.log(`Annonce Service lancé sur le port ${PORT}`);
});
