<script>
import Card from "../../components/ui/Card/Card.vue"
import PostForm from "./PostForm.vue"
export default {
    name: "wallPage",
    components: {
        Card,
        PostForm
    }
}
</script>

<template>
<div class="container-sm">
<PostForm></PostForm>
<Card></Card>
<Card></Card>
<Card></Card>
</div>

</template>

<style >
</style>