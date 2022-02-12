<template>
<div>
    <h2>child for passing data from Child to parent</h2>
    <button v-on:click="getName(name)">Alert Name</button>
</div>
</template>

<script>
export default {
    name: 'childForCtoP',
    data() {
        return {
            name: 'krishna'
        }
    },
    props: {
        getName: Function
    }

}
</script>
