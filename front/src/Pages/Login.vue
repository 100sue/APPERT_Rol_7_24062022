<template>
<main class="form-signin">
  <form @submit.prevent = login()>
     <div class="formLogin">
     <img class="mb-4 d-block mx-auto" src="../../icon.svg" alt="" width="72" height="57">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="formLogin">
       <label for="floatingInput">Email </label>
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required v-model = "email"/>
     
    </div>
    <div class="formLogin">
       <label for="floatingPassword">Password</label>
       <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required v-model = "password"/>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Login</button>
     <p class="errorLogin"></p>
    <p class="mt-5 mb-3 text-muted">&copy; 2021–2022</p>
     </div>
     </form>
    

</main>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      token: "",
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const email = this.email;
      const password = this.password;
    
      axios.post("http://localhost:3000/api/auth/login",
            {
              email,
              password,
            },
            {
              header: {
                "Content-Type": "application/json",
              },
            }
      )
      .then((res) => {
        {
          localStorage.setItem("token", (res.data.token));
          localStorage.setItem("userId", (res.data.userId));
          localStorage.setItem("name", (res.data.name));
        }
        this.$router.push('/wallpage');
      })
      .catch(() => {
        document.getElementsByClassName("errorLogin")[0].innerHTML = "Votre email ou votre mot de passe n'est pas correct"
      });
    },
  }
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