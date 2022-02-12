<template>
    <div>
        <h1>Before Create and Create Methods {{name}}</h1>
    </div>
</template>

<script>
export default {
    name:'before-create-and-created',
    beforeCreate() {
        this.name="krishn"   // name will not change
        alert('called Before Created');
        // this.getName("beforecreate");
    },
    created() {
        this.name="krishna"  //now the name will change which shows that created is called after data.
        alert('called once created');
    },
    data() {
        this.getName();
        alert("data is attached with template");
        return{
            name:'krish'
        }

    },
    methods: {
        
       getName(){
           alert("name is called from ");
       }
    }


    // So, the Heirarchy of calling the function automatically is:
    //   1. beforeCreate() function will be called first.
    //   2. then the data and other methods are binded to the template
    //   3. then our created() method will be called.
}
</script>

<style scoped>
h1{
    color: green;
}
</style>