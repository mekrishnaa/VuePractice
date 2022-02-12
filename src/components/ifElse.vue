<template>
    <div>
        <h1> Vue If-else </h1>
        <h2 v-if="show" v-bind:style="{color:'green'}"> Showing If Condition Heading </h2>
        <h2 v-else v-bind:style="{color:'blue'}"> Showing Else Condition Heading </h2>
        <button v-on:click="show=!show"><span v-if="!show">Show If Heading</span> <span v-if="show">Show Else Heading </span> </button>
    </div>
</template>
<script>
export default {
    name:'ifElse',
    data() {
        return {
            show:false
        }
    },
    methods: {
        // showHeading(){
        //     this.show = !this.show;
        // }
    }
}
</script>
