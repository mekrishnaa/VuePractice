<template>
    <div>
       <button @click="tabs='react'">load react</button>
       <button @click="tabs='angular'">load angular</button>
       <button @click="tabs='vuejs'">load vueJs </button>
        <component :is="tabs" />
    </div>
</template>

<script>
import react from './react.vue'
import vuejs from './vuejs.vue';
import angular from './angular.vue';
export default {
    name:'js',
    components:{react,vuejs,angular},
    data() {
        return {
            tabs:''
        }
    },
}
</script>

<style scoped>
h2{
    color:rgb(189, 189, 16);
}
</style>