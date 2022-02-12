<template>
    <div class="container">
        <!-- <h1>multiple slot in vue (child comp.)</h1> -->
        <header>
            <slot name="header"></slot>
        </header>
        <content>
            <slot name="main">  </slot>
        </content>
        <footer>
            <slot name="footer"><button>Click Me!</button></slot>
        </footer>
    </div>
</template>

<script>
export default {
    name:'multiple-slot-child',
}
</script>

<style scoped>
h1{
    color:green;
}
.container{
    border: 1px solid black;
    text-align: center;
    padding: 20px;
    width: 200px;
    margin-left: 100px;
}
</style>