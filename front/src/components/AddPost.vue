<template>
    <section class="post-container">
      <form class="post-card" v-on:submit.prevent="envoiForm($event)">
        <h1>Exprimez-vous...</h1>
        <!-- Nouvelle publication : texte -->
        <div class="post-infos">
          <label for="postTitle" class="hidden">Nouvelle publication</label>
          <textarea
            name="postTitle"
            id="postTitle"
            placeholder="Que voulez-vous partager ?"
            v-model="postForm.message"
            aria-invalid="false"
            required
          ></textarea>
        </div>
        <!-- Nouvelle publication : lien -->
        <div class="post-content">
          <input
            type="text"
            name="postContent"
            id="postContent"
            class="post-input"
            placeholder="Joindre un lien ?"
            title="Joindre un lien"
            v-model="postForm.link"
          />
          <!-- Nouvelle publication : image -->
          <div class="post-img">
            <label for="addContent"
              ><i class="far fa-file-image" title="Ajouter un fichier"></i
            ></label>
            <input type="file" id="addContent" name="image" accept="image/*" />
          </div>
          <button class="post-btn" title="Valider la publication">Publier</button>
        </div>
      </form>
    </section>
  </template>
  
  <script>
  export default {
    name: "AddPost",
    props: {
      createPost: Function,
    },
    data() {
      return {
        postForm: {
          message: "",
          media: "",
          link: "",
        },
      };
    },
    methods: {
      // Ajout d'une nouvelle publication
      envoiForm(event) {
        const message = this.postForm.message;
        const media = event.target.image.files[0];
        const link = this.postForm.link;
        // Formulaire contenant les informations du post
        var formData = new FormData();
        formData.append("message", message);
        formData.append("image", media);
        formData.append("link", link);
        alert("Publication ajoutée !");
        this.createPost(formData);
        // Clean des inputs une fois la publication ajoutée
        this.postForm = {
          message: "",
          media: "",
          link: "",
        };
        event.target.image.value = "";
      },
    },
  };
  </script>
  
  <style scoped>
  .post-container {
    width: 50%;
    margin: auto;
    height: auto;
    margin-bottom: 3%;
  }
  .post-card {
    box-shadow: 0 0 20px #000000b3;
    background: #315ef0;
    border-radius: 5px;
  }
  .hidden {
    display: none;
  }
  h1 {
    padding-top: 2%;
    padding-left: 4%;
    color: white;
  }
  .post-infos {
    text-align: center;
  }
  textarea {
    width: 90%;
    height: 5em;
    padding: 1%;
    margin-bottom: 2%;
    resize: none;
  }
  .post-content {
    display: flex;
    justify-content: space-between;
  }
  .post-input {
    width: 40%;
    margin-left: 4%;
    margin-bottom: 2%;
    padding: 1%;
    background: #819bee;
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
    padding-top: 2%;
    color: white;
    transition: transform 0.2s;
  }
  .post-img:hover {
    transform: scale(1.1);
  }
  .post-btn {
    margin-right: 4%;
    margin-bottom: 2%;
    width: 40%;
    background-color: #fd340a;
    border: 1px solid #d4d3e8;
    box-shadow: 0px 1px 1px black;
    font-weight: 700;
    color: white;
    height: 3em;
    border-radius: 10px;
  }
  /* Medium devices (tablets, 768px and up) */
  @media screen and (max-width: 1023px) {
    .post-container {
      width: 60%;
    }
  }
  /* Small device (smartphone, to 767px max) */
  @media screen and (max-width: 767px) {
    .post-container {
      width: 80%;
      margin-bottom: 8%;
    }
  }
  </style>