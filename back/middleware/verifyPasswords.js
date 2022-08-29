// Importation du package password-validator en charge de la création d'un password robuste :
// Vérification du respect du schéma password.
// Vérification de l'exactitude des deux mots de passe.

const passwordSchema = require('../models/password');

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.status(400).json({ message : "! Mot de passe incorrect, veuillez respecter le schéma suivant : 8 caractères minimum, 1 majuscule, 2 chiffres !"});
        return;
    } 
    
    if (req.body.password != req.body.passwordConfirm){
        res.status(400).json({ message : "! Veuillez utiliser deux mots passe identiques !"});
        return;
    }   
    next();
};