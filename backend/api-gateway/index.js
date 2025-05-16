require('dotenv').config();
const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

// Variables d'environnement
const USER_SERVICE_URL = process.env.USER_SERVICE_URL;
const ANNONCE_SERVICE_URL = process.env.ANNONCE_SERVICE_URL;
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

app.use(express.json());

// Middleware de vérification JWT
function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: 'Token manquant' });

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ error: 'Token invalide' });
    }
}

// Accueil
app.get('/', (req, res) => {
    res.send('Bienvenue sur l’API Gateway de VendreFacile 🚀');
});

// Proxy vers user-service
app.get('/users', async (req, res) => {
    try {
        const response = await axios.get(`${USER_SERVICE_URL}/users`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erreur user-service' });
    }
});

// Proxy vers annonce-service sécurisé par JWT
app.get('/annonces-secure', authenticate, async (req, res) => {
    try {
        const response = await axios.get(`${ANNONCE_SERVICE_URL}/annonces`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erreur annonce-service' });
    }
});

app.listen(PORT, () => {
    console.log(`✅ API Gateway démarrée sur http://localhost:${PORT}`);
});
