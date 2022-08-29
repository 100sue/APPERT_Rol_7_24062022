<template>
    <div class="container">
      <HeaderWall />
  
      <!-- Page dédiée à la modification de publication -->
      <main class="modify-bck">
        <section class="modify-card">
          <!-- En-tête du post avec l'avatar l'auteur, son nom/prénom, la date d'ajout, et un bouton retour au Wall -->
          <div class="post-card-header">
            <a
              href="/profil"
              class="post-header-pic"
              title="Lien vers mon profil"
            >
              <img
                v-if="post.image"
                :src="`http://localhost:5173/${post.image}`"
                width="50"
                alt="Avatar"
                class="post-header-pic-round"
              />
              <i
                v-else
                id="post-pic-modify-default"
                class="fas fa-user-circle"
              ></i>
            </a>
            <div class="post-header-name-date">
              <div class="post-header-name">
                <p>{{ post.nom }} {{ post.prenom }}<br /></p>
              </div>
              <div class="post-header-date">
                <p>{{ datePost(post.date_ajout) }}</p>
              </div>
            </div>
            <button
              class="btn-annuler"
              title="Retour au Wall"
              @click="cancelModify"
            >
              <i class="far fa-times-circle"></i>
            </button>
          </div>
  
          <!-- Contenu de la publication à modifier -->
          <div class="post-content">
            <form class="post-description" @submit.prevent="updatePost($event)">
              <input
                class="post-txt"
                title="Modifier le message de la publication"
                v-model="post.message"
              />
              <div class="post-media">
                <img
                  :src="`http://localhost:5173/${post.media}`"
                  alt="Image post"
                  class="wall-img"
                  v-if="post.media != 'null'"
                />
                <img
                  :src="post.link"
                  alt="Image post"
                  class="wall-img"
                  v-if="post.link && post.media == 'null'"
                />
              </div>
              <div class="post-modif">
                <input
                  type="text"
                  name="postContent"
                  id="postContent"
                  class="post-input"
                  placeholder="Joindre un lien ?"
                  title="Joindre un lien"
                />
                <div class="post-img">
                  <label for="addContent"
                    ><i class="far fa-file-image" title="Ajouter un fichier"></i
                  ></label>
                  <input
                    type="file"
                    id="addContent"
                    name="image"
                    accept="image/*"
                  />
                </div>
                <button class="post-btn" title="Valider les modifications">
                  Enregistrer les modifications
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import HeaderWall from "../components/HeaderWall.vue";
  export default {
    name: "ModifyPost",
    components: {
      HeaderWall,
    },
    data() {
      return {
        post: {},
      };
    },
    created() {
      this.token = localStorage.getItem("token");
      this.getOnePost();
    },
    methods: {
      // Annulation et redirection sur le Wall
      cancelModify() {
        this.$router.push({ name: "Wall" });
      },
      // Validation et redirection sur le Wall
      validMofidy() {
        this.$router.push({ name: "Wall" });
      },
      // Mise en forme de la date d'ajout du post sur un standard français
      datePost(date) {
        const event = new Date(date);
        const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        };
        return event.toLocaleDateString("fr-Fr", options);
      },
      // Récupération du post à modifier
      getOnePost() {
        const postId = this.$route.params.id;
        axios
          .get(`http://localhost:5173/api/posts/${postId}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.token}`,
            },
          })
          .then((res) => {
            this.post = res.data;
          })
          .catch(() => {
            this.$router.push({ name: "Home" });
          });
      },
      // Modification du post
      updatePost(event) {
        const postId = this.$route.params.id;
        var formData = new FormData();
        formData.append("media", this.post.media);
        formData.append("message", this.post.message);
        formData.append("image", event.target.image.files[0]);
        formData.append("link", this.post.link);
        axios({
          method: "put",
          url: `http://localhost:5173/api/posts/${postId}`,
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${this.token}`,
          },
        })
          // Une fois les vérifications et modifications effectuées, redirection vers le Wall
          .then(() => {
            this.$router.push({ name: "Wall" });
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .modify-bck {
    background-attachment: fixed;
    background-image: url("../assets/test2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: auto;
    padding: 3%;
  }
  .modify-card {
    width: 50%;
    margin: auto;
    padding: 1% 2% 1% 2%;
    background: #f1f1f1;
    border-radius: 2px;
    box-shadow: 0 0 20px #000000b3;
    box-sizing: border-box;
    margin-bottom: 3%;
  }
  .post-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .post-header-pic-round {
    border-radius: 50% !important;
    height: 50px;
    width: 50px;
  }
  #post-pic-modify-default {
    font-size: 50px;
    color: rgb(30, 51, 121);
  }
  .post-header-name-date {
    margin-left: 5%;
  }
  .post-header-name {
    font-size: 1.1em;
    font-weight: bold;
  }
  .post-header-date {
    color: rgb(88, 88, 88);
  }
  .btn-annuler {
    border: none;
    font-size: 1.5em;
    color: rgb(30, 51, 121);
  }
  .btn-annuler :hover {
    color: red;
  }
  .post-txt {
    width: 98%;
    margin-bottom: 3%;
    padding-bottom: 5%;
  }
  .post-media {
    margin-bottom: 1%;
  }
  .wall-img {
    width: 100%;
  }
  .post-infos {
    text-align: center;
  }
  .post-input {
    width: 45%;
    margin-bottom: 2%;
    padding: 1%;
  }
  .post-img > input {
    display: none;
  }
  .post-img {
    width: 10%;
    font-size: 1.5em;
    justify-content: center;
    align-content: center;
    display: flex;
    padding-top: 1%;
    color: rgb(30, 51, 121);
    transition: transform 0.3s;
  }
  .post-img:hover {
    transform: scale(1.1);
  }
  .post-modif {
    display: flex;
    width: 100%;
    margin-top: 3%;
  }
  .post-btn {
    margin-bottom: 2%;
    width: 45%;
    background-color: rgb(49, 94, 240);
    color: white;
    height: 3em;
    border-radius: 10px;
  }
  /* Medium devices (tablets, 768px and up) */
  @media screen and (max-width: 1023px) {
    .modify-card {
      width: 60%;
      margin-top: 3%;
    }
  }
  /* Small device (smartphone, to 767px max) */
  @media screen and (max-width: 767px) {
    .modify-card {
      width: 80%;
      margin-top: 5%;
    }
  }
  </style>