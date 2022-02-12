<template>
    <div>
        <h1>Computed Property in vue</h1>
        <h3>Direct calculated: {{(dollors*rupees)-discount}}</h3> <!-- here we are repeating the same calculation so we use computed property of vue. -->
        <h3>Direct calculated: {{(dollors*rupees)-discount}}</h3>
        <h3>Direct calculated: {{(dollors*rupees)-discount}}</h3>
        <h3>Generated From Computed :{{getResult}}</h3>
        <h3>Generated from computed: {{getResult}}</h3>
        <h3>Generated from methods: {{getResultFromMethod()}}</h3>
        <h3>Generated from methods: {{getResultFromMethod()}}</h3>
    </div>
</template>

<script>
export default {
    name:'computed-property',
    data() {
        return {
            dollors:100,
            rupees:70,
            discount:10
        }
    },
    computed:{
        getResult(){
            return ((this.dollors*this.rupees)-this.discount);
        }
    },
    methods: {
        getResultFromMethod(){
            return ((this.dollors*this.rupees)-this.discount);
        }
    },
}




//Computed property is similar to method property and it's task can be performed using 
// simple methods. But Computed property is cache based mechanism so it is faster than
// normal methods. also it is used where we have more calculation or operation on data.
</script>
<style scoped>
h1{
    color:green;
}
</style>

