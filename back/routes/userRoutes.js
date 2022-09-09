const express = require('express'); 
const router = express.Router();
const userCtrl = require('../controllers/userCtrl');
const verifyPassword = require('../middleware/verifyPasswords');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth'); 

// Routes user :
// Inscription, Connexion, Modifier un compte, Modifier l'avatar (image de profil),
// Supprimer un compte, Récupérer un utilisateur, Récupérer la liste de tous les utilisateurs .

router.post('/signup', verifyPassword, userCtrl.signup);                
router.post('/login', userCtrl.login);                                                         
//router.post('/:id/image', auth, multer, userCtrl.updateUserImage);     
//router.delete('/:id', auth, userCtrl.deleteUser);                      
//router.get('/:id', auth, userCtrl.getOneUser);                          
//router.get('/', auth, userCtrl.getAllUsers); 


module.exports = router;