<script>
import Avatar from "../Avatar.vue"
import Comment from "./Comment.vue"
export default {
    name: "Card",
    components: {
        Comment,
        Avatar
    }
}
</script>

<template>
<div class="card mb-3 m-auto">
    <div class="card-header">
         <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" 
        class="rounded-circle" 
        alt="Avatar">
        Franck du marketing</div>
  <img src="https://picsum.photos/400/200" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
        This is a wider card with supporting text below as a natural lead-in to additional content. 
        This content is a little bit longer, bla bla bla
        </p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  <Comment></Comment>
  <Comment></Comment>
  <div class="d-flex gap-1">
  <Avatar></Avatar>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username">
  <button type="button" class="btn btn-primary ms-auto rounded-pill">Post</button>

  </div>
  </div>
</div>
</template>

<style scoped>
@media (min-width: 768px) { 
.card {
    width: 70%;
}
.card-header img {
    width: 50px;
}
}
</style>