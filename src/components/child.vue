<template>
    <div>
        <h1>Getting Data from Parent </h1>
        <p>Data got from parent is : {{name}} </p>
        <h2>userDetails got from Parent </h2>
        {{userDetail}}
        <p>{{userDetail?.name}}</p>
        <p>{{userDetail?.age}}</p>
        <p>{{userDetail?.email}}</p>
        <button v-on:click="callParent()"> Call Parent Function </button>
    </div>
</template>

<script>
export default {
    name:'child',
    props:{
        name:String,
        userDetail:Object,
        callParent:Function
    }
}
</script>

<style scoped>
h1{
    color:blue;
}
h2{
    color:cyan;
}
</style> 
