<template>
    <div>
        <h2>this is the profile Pageof {{profile}} </h2>
    </div>
</template>

<script>

import {useRoute} from 'vue-router';

export default {
    name:'profile',
    // mounted() {
    //     const route = useRoute();
    //     this.profile = route.params.name;
    //     console.log("routes is ",route.params);
    // },
    updated(){
        const route=useRoute();
        this.profile = route.params.name;
    },
    data() {
        return {
            profile:''
        }
    },

}
</script>

<style scoped>
h2{
    color:green;
}
</style>