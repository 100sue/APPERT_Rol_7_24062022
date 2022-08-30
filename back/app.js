// Import d'express afin de créer des applis web avec Node.

// Import de body-parser afin de pouvoir "parser" le body de la requête.
// Import mongoose afin de faciliter les interactions avec la base de données de mongoDB.
// Import de path afin de pouvoir travailler avec les chemins des fichiers(module node qui sert à cacher notre addresse Mongo, marche avec dotenv).
// Import de dotenv afin de protéger les informations de connexion vers la base de données.
// Appel au module Express avec sa fonction.

const express = require('express'); 
const helmet = require('helmet'); 
const bodyParser = require('body-parser');
const apiLimiter = require('./middleware/limits-rate'); 
const mongoose = require('mongoose'); 
const path = require('path');
require('dotenv').config();


// Création de l'application Express, sécurisée par le package Helmet via la définition d'en-têtes HTTP diverses :

const app = express();

// Routes vers l'utilisateur et les posts :

const userRoutes = require('./routes/userRoutes');        
const postRoutes = require('./routes/postRoutes');   

// Connection à la base de données (MongoDB Atlas Database) :

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, 
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



// Avant la route d'API, on ajoute la fonction (middleware) des headers permettant aux deux ports, front et end, de communiquer entre eux.
// Ajout des headers permettant le Cross Origin Resource Sharing (CORS) :
// Accès autorisé pour tous, Accès autorisé sous certains en-têtes, Accès autorisé sous certaines méthodes.

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
});


// On récupère le body en front sur l'objet request et on "parse" le corps de la requête en objet json :

app.use(bodyParser.json());

// Définition des différentes routes : utilisateur, publications, likes, commentaires.
// Route images.

app.use('/api/users', apiLimiter, userRoutes);  
app.use('/api/posts', postRoutes);              
app.use('/api/likes', likeRoutes);            
app.use('/api/comments', commentRoutes);        
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(helmet());


// Exportation du module afin de pouvoir le réutiliser :

module.exports = app;