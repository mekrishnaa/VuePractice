<template>
    <div>
        <h2>this is an api call</h2>
        <p v-for="item in list" :key="item"> {{item}}</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'apiCall',
    data() {
        return {
            list:[]
        }
    },
    async mounted() {
        let result = await axios.get('https://reqres.in/api/users?page=1');
        this.list = result.data.data;
        console.log(result.data.data);
        console.log(result);
    },
}
</script>

<style scoped>
    h2{
        color: green;;
    }
</style>

