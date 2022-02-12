<template>
    <div>
        <h2>This is two way Binding Example</h2>
        <label for="name">Enter Name</label>
        <input type="text" v-model="name"/>
        <h3>Name is: {{name}} </h3>
    </div>
</template>

<script>
export default {
    name:'twoWayBinding',
    data(){
        return{
            name:''
        }
    },
    methods: {
        
    },
}
</script>