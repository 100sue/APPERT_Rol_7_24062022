<template>
    <section class="signup-container">
      <h1>Créer un compte</h1>
  
      <!-- Formulaire d'inscription -->
      <form class="form-card" v-on:submit.prevent="envoiForm">
        <div class="form-group">
          <label for="nom">Nom</label>
          <input type="text" v-model="signUpForm.nom" name="nom" id="nom" class="form-input" aria-invalid="false" required />
          <div class="form-err"></div>
        </div>
        <div class="form-group">
          <label for="prenom">Prénom</label>
          <input type="text" v-model="signUpForm.prenom" name="prenom"  id="prenom"  class="form-input" aria-invalid="false" required />
          <div class="form-err"></div>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="signUpForm.email" name="email" id="email" class="form-input" aria-invalid="false"  required />
          <div class="form-err"></div>
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input  type="password"  v-model="signUpForm.password"  name="password"  id="password"  class="form-input"  aria-invalid="false" required />
          <div class="form-err"></div>
        </div>
        <div class="form-group">
          <label for="passwordConfirm">Confirmez le mot de passe</label>
          <input type="password"  v-model="signUpForm.passwordConfirm" name="passwordConfirm"  id="passwordConfirm" class="form-input" aria-invalid="false"  required />
          <div class="form-err"></div>
        </div>
        <button class="form-btn">S'enregistrer</button>
      </form>
  
      <div class="sign-card">
        <p>
          Déjà inscrit ?
          <a href="" @click.prevent="changeForm(false)">Connectez-vous !</a>
        </p>
      </div>
    </section>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "SignUp",
    props: {
      changeForm: Function,
    },
    data() {
      return {
        signUpForm: {
          nom: "",
          prenom: "",
          email: "",
          password: "",
          passwordConfirm: "",
        },
      };
    },
    methods: {
      // Enregistrement d'un nouvel utilisateur
      envoiForm() {
        const nom = this.signUpForm.nom;
        const prenom = this.signUpForm.prenom;
        const email = this.signUpForm.email;
        const password = this.signUpForm.password;
        // Création du formulaire contenant les datas de l'utilisateur
        var formData = new FormData();
        formData.append("prenom", prenom);
        formData.append("nom", nom);
        formData.append("email", email);
        formData.append("password", password);
        // Envoi du formulaire via la méthode post d'axios
        axios({
          method: "post",
          url: "http://localhost:27107/api/users/signup",
          data: this.signUpForm,
          headers: { "Content-Type": "application/json" },
        })
          // Inscription réussite, maj du localStorage et redirection sur le Login
          .then((reponse) => {
            console.log(reponse);
            alert(
              "Inscription réussie ! Veuillez vous connecter pour accéder à votre compte !"
            );
            localStorage.clear();
            this.$router.push({ name: "Home" });
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  * {
    font-family: "Titillium Web", sans-serif;
    background-color: #315ef0;
    border-radius: 5px;
  }
  .signup-container {
    padding: 0.5%;
    border: 2px solid #333;
    box-shadow: 0px 3px 3px #333;
  }
  h1 {
    text-align: center;
    font-size: 2em;
    color: white;
  }
  .form-card {
    margin-left: 5%;
    margin-right: 5%;
  }
  .form-group {
    display: flex;
    flex-direction: column;
  }
  input {
    margin-bottom: 6%;
    height: 2.2rem;
  }
  .form-btn {
    width: 100%;
    margin-top: 25px;
    padding: 16px 20px;
    background-color: #fd340a;
    color: white;
    height: 3.2rem;
    border-radius: 26px;
    border: 1px solid #d4d3e8;
    box-shadow: 0px 2px 2px black;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 18px;
    font-weight: 700;
  }
  .sign-card {
    font-style: italic;
    text-align: center;
    color: white;
  }
  .sign-card a {
    text-decoration: none;
  }
  /* Small device (smartphone, to 767px max) */
  @media screen and (max-width: 767px) {
    h1 {
      font-size: 1.5em;
    }
  }
  </style>