<template>
    <div>
        <h1>Reusing components. This is parent </h1>
        <reuseChild v-for="user in users" :key="user.name" :data="user" :alertData="showDatafunction"/>
    </div>
</template>

<script>
import reuseChild from './reuseChild.vue';
export default {
    name:'reuseParent',
    components:{
        reuseChild
    },
    data() {
        return {
            users:[
                {name:'krishna', age:24,email:'krishna@radha.com'},
                {name:'ram', age:22,email:'ram@siya.com'},
                {name:'Siya', age:22,email:'siya@ram.com'},
                {name:'radha', age:24,email:'radha@krishna.com'},
            ]
        }
    },
    methods: {
        showDatafunction(data){
            alert(data.name);
            console.log(data);
        }
    },
}
</script>

<style scoped>
h1{
    color:green;
}
h2{
    color:lightblue;
}
</style>