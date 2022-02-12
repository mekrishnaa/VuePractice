<template>
    <div class="user">
      <!--  <h1>Reusing components. This is Child </h1>
        <h2>Data Comming from Parents</h2> -->
        <p v-for="(value,key) in data" :key="key"> {{key}} -> {{value}} </p>
        <button v-on:click="alertData(data)">Alert!</button>
    </div>
</template>

<script>
export default {
    name:'reuseChild',
    props:{
        data:Object,
        alertData:Function
    }
}
</script>

<style scoped>
h1{
    color:green;
}
h2{
    color:lightblue;
}
.user{
    padding:10px;
    background-color:skyblue;
    border-bottom:2px solid;
    margin-bottom: 10px;
}
</style>