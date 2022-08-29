// Middleware de validation de mot de passe:
// Création d'un schéma de sécurité

const passwordValidator = require('password-validator');
const passwordSchema = new passwordValidator();

// Ajout de conditions qui seront vérifiées à la création du mot de passe :
// Minimum de 8 caractères,  Maximum de 100 caractères,
// Devant contenir au moins une majuscule? au moins une minuscule, au moins 2 chiffres, aucun espace.
// Interdiction de ces valeurs : password1234, motdepasse1234.

passwordSchema
.is().min(8)            
.is().max(100)          
.has().uppercase()      
.has().lowercase()      
.has().digits(2)        
.has().not().spaces()  
.is().not().oneOf(['password1234', 'motdepasse1234']); 

module.exports = passwordSchema;