// Importation du package multer en charge de la gestion des fichiers téléchargés via une requête HTTP.
// Gestion du MIME type des fichiers images

const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif'
};


// Objet de configuation de multer en charge de l'enregistrement des images :
// Destionation des fichiers.
// Création du nom et de l'extension du fichier.

const storage = multer.diskStorage ({
    destination: (req, file, callback) => {
        callback(null, 'images');
    },

    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({ storage: storage }).single('image');