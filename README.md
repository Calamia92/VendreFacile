# 🛒 VendreFacile

> Plateforme web de petites annonces inspirée de Leboncoin — conçue avec une architecture microservices moderne, scalable et modulaire.

---

## 📌 Objectif du projet

VendreFacile permet à des utilisateurs particuliers de :
- Publier, rechercher et consulter des annonces
- Interagir via une messagerie interne
- Gérer leurs profils et annonces favorites

---

## 🚀 Fonctionnalités principales (MVP)

✅ Gestion des utilisateurs (inscription / connexion)  
✅ CRUD d'annonces  
✅ Recherche par mot-clé, catégorie, localisation  
✅ Messagerie privée entre utilisateurs  
✅ Système de favoris  
✅ Interface responsive (mobile-first)  

---

## 🔧 Architecture choisie

### 🧱 Microservices + API Gateway
Chaque service a son propre domaine métier :
- `user-service` : utilisateurs et authentification
- `annonce-service` : gestion des annonces
- `favorites-service` : favoris
- `messaging-service` : messagerie
- `api-gateway` : point d'entrée unique (auth, routage)

Le tout est orchestré avec Docker et Docker Compose.

### 🧠 Principes appliqués
- **DDD** : Domain-Driven Design (bounded contexts clairs)
- **KISS** : architecture simple, efficace
- **SOLID** : services modulaires et testables
- **YAGNI** : seules les fonctionnalités essentielles sont intégrées au MVP

---

## 🗃️ Base de données

- **MongoDB** : base NoSQL document-oriented
- **Sharding** activé par région pour la scalabilité
- **Réplication** assurée pour la tolérance aux pannes

---

## 🛡️ Sécurité

- Authentification via **JWT**
- Prêt pour intégration **OAuth 2.0**
- Sécurité RGPD : suppression compte / export des données

---

## 📦 Technologies

| Frontend     | Backend        | DB & Infra         |
|--------------|----------------|--------------------|
| React (with Tailwind) | Node.js + Express  | MongoDB (sharded) |
| Webpack      | REST APIs       | Redis (cache)      |
| Axios        | Docker          | RabbitMQ (async)   |

---

## ⚙️ Lancer le projet en local

```bash
# 1. Cloner le repo
git clone https://github.com/ton-utilisateur/VendreFacile.git
cd VendreFacile

# 2. Lancer les services
docker-compose up --build

# 3. Frontend disponible sur :
http://localhost:8080
# 4. API disponible via :
http://localhost:3000
