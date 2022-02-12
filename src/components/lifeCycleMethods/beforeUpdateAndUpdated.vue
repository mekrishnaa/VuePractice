<template>
    <div>
        <h1>Before-update and updated lifeCycleMethods</h1>
        <h1 ref="count">{{count}}</h1>
        <button @click="count+=1">Update Count</button>
    </div>
</template>

<script>
export default {
    name:'before-update-and-updated',
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
    beforeUpdate() {
        alert("before Update called");
        alert(this.count);
        console.log("value of count before update is : ",this.count);
        console.log("value of count before Update on UI is:", this.$refs['count'].textContent);
    },
    updated() {
        alert("After Updated");
        alert(this.count);
        console.log("value of count after update is : ", this.count);
        console.log("value of count after Update on UI is:", this.$refs['count'].textContent);
        console.log(this.$refs['count']);

    },
    data(){
        alert("data is bind with template");
        return{
            count:1
        }
    }

}
</script>

<style scoped>
h1{
    color:green;
}
</style>