<template>
    <div>
       <h1> HTML Template Binding </h1>
       <div class="container" v-html="[tag ,tag2]">
       </div>
    </div>
</template>

<script>
export default {
    name:'htmlBinding',
    data() {
        return {
            tag:'<h2 class="htmlbind">This is binded html text </h2><br/>',
            tag2:'<h2 class="htmlbind">This is binded html text 2</h2>',

        }
    },
}
</script>

<style scoped>
h1{
    color:green;
}
.container{
    display:flex;
    justify-content:center;
    /*align-items:center;*/
}
.htmlbind{
    color:skyblue;
}
</style>