<script>
export default{
    name:"PostForm"
}
</script>


<template>
<div class="form-floating mt-4">
  <div contenteditable="true" class="form-control py-3">
  </div>
</div>
<div class="d-flex">
<label for="file-input" class="btn btn-secondary mt-1">Ajouter image</label>
<input id="file-input" type="file"/>
<button type="button" class="btn btn-primary mt-1 ms-auto">Post</button>
</div>
<hr class="dropdown-divider mt-4">
</template>

<style scoped>
#file-input {
    display: none;
}
body {
    background-color: #5f5f5f1a !important;
}
.form-floating > div.form-control {
    height: auto;
    min-height: 5rem;
}
.form-floating > div.form-control:empty:not(:focus)::before {
    content: "Ecrire un message";
    color: #a0a0a0;
    display: block;
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    
}
</style>