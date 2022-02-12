<template>
    <div>
        <h1>Before-Mounted and Mounted lifeCycleMethods</h1>
    </div>
</template>

<script>
export default {
    name:'before-mount-and-mounted',
    beforeCreate() {
        alert("Before Created");
    },
    created() {
        alert("now Created");
    },
    beforeMount() {
        console.log(this.$el);
        console.log("this method is called before the attachment of template")
        alert("Before Mounted");
    },
    mounted() {
        console.log(this.$el);
        console.log("this method is called after the attachment of template")
        alert("now mounted");
    },
    data(){
        alert("data is bind with template");
    }

}
</script>

<style scoped>
h1{
    color:green;
}
</style>