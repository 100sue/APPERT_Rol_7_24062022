// Importation du package jsonwebtoken.
// Importation des variables d'environnement.
// Récupération du token

const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'User ID non valable';
        } else {
            req.userId = userId;
            req.status = decodedToken.status;
            next();
        }
    } catch {
        res.status(401).json ({
            error: new Error ('Requête non authentifiée')
        });
    }
};