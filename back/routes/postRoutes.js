const express = require('express');  
const router = express.Router();
const postCtrl = require('../controllers/postCtrl');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth'); 

// Créer un nouveau post, Modifier un post, Supprimer un post, Récupérer un post, Récupérer l'intégralité des posts .

router.post('/', auth, multer, postCtrl.createPost);     
router.put('/:id', auth, multer, postCtrl.updatePost);   
router.delete('/:id', auth, postCtrl.deletePost);         
router.get('/:id', auth, postCtrl.getOnePost);           
router.get('/', auth, postCtrl.getAllPosts);             

module.exports = router;