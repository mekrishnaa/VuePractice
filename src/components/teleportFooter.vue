<template>
    <div class="foot">
        <h2>This is Footer Component coming from vue js to index.html .</h2>
    </div>
</template>

<script>
export default {
    name:'teleport-footer'
}
</script>

<style scoped>
h2{
    color:rgb(100, 224, 116);
}
.foot{
    position: absolute;
   bottom: 0;
   background-color: bisque;
}
</style>