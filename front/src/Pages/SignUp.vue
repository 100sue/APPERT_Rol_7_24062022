<template>
<main class="form-signin">
  <form @submit.prevent = signup()>
    <div class="formSignup">
     <img class="mb-4 d-block mx-auto" src="../../icon.svg" alt="" width="72" height="57">
    <h1 class="h3 mb-3 fw-normal">Please sign up</h1>
     
     <div class="formSignup">
       <label for="floatingInput">Nom</label>
      <input type="text" class="form-control" id="nameSignup" placeholder="nom" required />
    </div>

    <div class="formSignup">
       <label for="floatingInput">Email</label>
      <input type="email" class=" form-control" id="emailSignup" placeholder="name@example.com" required />
     
    </div>
    <div class="formSignup">
       <label for="floatingPassword">Mot de passe</label>
       <input type="password" class="form-control" id="passwordSignup" placeholder="Exemple00233" required />
    </div>
    <div class="formSignup">
       <label for="floatingPassword">Vérification du mot de passe</label>
       <input type="password_confirmation" class="form-control" id="verifPasswordSignup" placeholder="Exemple00233" required />
    </div>
    
    <button class="w-100 btn btn-lg btn-primary" type="submit">S'inscrire</button>
     <p class="errorSignup"></p>
    </div>

</form>
    

</main>
</template>

<script>
import axios from "axios";
export default {
  name: "Signup",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    }; 
  },
  methods: {
    signup() {
      const name = document.getElementsById("nameSignup")[0].value;
      const email = document.getElementsById("emailSignup")[0].value;
      const password = document.getElementsById("passwordSignup")[0].value;
      const password_confirmation = document.getElementsById("verifPasswordSignup")[0].value;
      if (password === password_confirmation && password.length > 0) {
        axios.post("http://localhost:3000/api/auth/signup",
            {
              name,
              email,
              password,
            },
            {
                header: {
                "Content-Type": "application/json",
                },
            }
        )
        .then(() => {
            alert("Félicitation ! Vous venez de vous inscrire !")
            this.$router.push('/login')
            }) 
        .catch(() => {
          document.getElementsByClassName("errorSignup")[0].innerHTML = "Votre nom ou votre email ou votre mot de passe est incorrect. Merci de respecter le format inscrit en exemple"
          });
      } else if (password !== password_confirmation) {
          alert("Les mots de passe ne sont pas identiques");
      }
    },
  },
};
</script>

<style>
html,
body {
  align-items: center;
  padding-bottom: 40px;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-floating:focus-within {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
    .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }
      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
      
</style>