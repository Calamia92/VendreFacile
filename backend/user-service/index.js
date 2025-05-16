require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

app.use(express.json());

// Connexion : génération de token
app.post('/login', (req, res) => {
    const { email } = req.body;

    if (!email) return res.status(400).json({ error: 'Email requis' });

    const user = { id: 1, email }; // Données utilisateur fictives
    const token = jwt.sign(user, JWT_SECRET, { expiresIn: '2h' });

    res.json({ token });
});

// Liste des utilisateurs fictifs
app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'Alice', email: 'alice@vendrefacile.com' },
        { id: 2, name: 'Bob', email: 'bob@vendrefacile.com' }
    ]);
});

app.listen(PORT, () => {
    console.log(`✅ User Service démarré sur http://localhost:${PORT}`);
});
