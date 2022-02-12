<template>
    <div>
        <h1>Ref in vue js 3</h1>
        <input type="text" ref="inp" placeholder="Enter Name"/>
        <button v-on:click="getRef">Click me!</button>
        <p>Input provided in inputBox is : {{name}}</p>
    </div>
</template>

<script>
export default {
    name:'ref',
    data() {
        return {
            name:''
        }
    },
    methods: {
        getRef(){
            this.$refs.inp.focus();
            this.name = this.$refs.inp.value;
            console.log(this.$refs.inp.value);
        }
    },  
}
</script>

<style scoped>
h1{
    color:green;
}
</style>