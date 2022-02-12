<template>
    <div>
        <h2>This is Parent Component.</h2>
        <button @click="activeTab='node'">Show Node Component </button>
        <!-- <node /> -->
        <button @click="activeTab='js'">Show JavaScript Component </button>
        <!-- <js /> -->
        <button @click="activeTab='c'">Show C Component </button>
        <!-- <c /> -->
        <button @click="activeTab='cpp'">Show C++ Component </button>
        <!-- <cpp /> -->
        <component :is="activeTab"/>
    </div>
</template>

<script>
import C from './c.vue'
import Cpp from './cpp.vue'
import Js from './js.vue'
import node from './node.vue'
export default {
  components: { node, Js, C, Cpp },
    name:'dynamic-comp-parent',
    data() {
        return {
            activeTab:'node'
        }
    },
}
</script>

<style scoped>
h2{
    color:rgb(212, 21, 203);
}
</style>