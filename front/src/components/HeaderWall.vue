<template>
  <header class="header-container">
    <!-- Header général comprenant le logo Groupomania et les liens de navigations vers les différentes pages de l'app -->
    <nav>
      <router-link to="/wall" title="Retour à la page d'accueil" class="logo-header" >
        <img src="../assets/main-header.png" alt="Réseau social d'entreprise Groupomania" class="logo-img" />
      </router-link>
      <router-link to="/community" title="Membres de l'équipe" class="users-header" >
        <i class="fas -solid fa-users"></i>
      </router-link>
      <router-link to="/profil" title="Profil" class="profil-header">
        <i class="fas fa-user-circle"></i>
      </router-link>
      <a href="" @click.prevent="deconnexion" title="Se déconnecter" class="deconnect-header" >
        <i class="fas -solid fa-power-off"></i>
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderWall",
  methods: {
    deconnexion() {
      localStorage.clear();
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
header {
  height: 60px;
  margin: auto;
}
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.logo-header {
  margin-right: 35%;
  margin-left: 3%;
}
.logo-img {
  height: 60px;
}
.users-header,
.profil-header,
.deconnect-header {
  margin-right: 3%;
}
i {
  font-size: 1.5em;
  color: #2551e2;
  transition: transform 0.5s;
}
i:hover {
  border-radius: 100%;
  transform: rotate(360deg);
}
/* Small device (smartphone, to 767px max) */
@media screen and (max-width: 767px) {
  nav {
    padding-top: 2%;
  }
  .logo-header {
    margin-right: 10%;
    margin-left: 3%;
  }
  .logo-img {
    height: 45px;
  }
}
</style>