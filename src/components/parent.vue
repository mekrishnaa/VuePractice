<template>
    <div>
        <h1>Passing Data from Parent to Child </h1>
        <child name="krishna kumar" :userDetail="detail" :callParent="callParentFunction"/>
    </div>
</template>

<script>
import child from './child.vue';

export default {
    name:'parent',
    components:{
        child
    },
    data() {
        return {
            detail:{name:'krishna',age:24,email:'mewithkrishna@gmail.com'}
        }
    },
    methods: {
        callParentFunction(){
            console.log("Parent Function Called");
        }
    },
}
</script>

<style scoped>
h1{
    color:green;
}
</style>