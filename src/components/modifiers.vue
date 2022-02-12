<template>
    <div>
        <h1>Modifiers in vue</h1>
        <input type="text" v-model.trim.lazy="data"/>
        <h2>Data is:{{data}}</h2>
    </div>
</template>

<script>
export default {
    name:'modifiers',
    data() {
        return {
            data:''
        }
    },
}
</script>
<style scoped>
h1{
    color:green;
}
</style>