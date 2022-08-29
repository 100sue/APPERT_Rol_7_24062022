// Importation du package express-rate-limit afin de contrer les attaques brute force,
// en limitant le nombre d'essai infructueux de mot de passe.

const rateLimit = require('express-rate-limit');

// Limitation du nombre de requêtes à l'API :
// 2 fois, suspendu pendant 1h, limite chaque adresse IP à 100 requêtes par windowMs.

const apiLimiter = rateLimit ({
    windowMs: 2 * 60 * 100,     
    max: 100,                   
    message: 'Vous avez dépassé le nombre de tentatives de connexion, merci de réessayer plus tard !'
});

module.exports = apiLimiter;