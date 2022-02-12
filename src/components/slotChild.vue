<template>
    <div class="parent">
        <h1>Slot in vue (child component)</h1>
        <h2>{{data}}</h2>
        <slot>
            <h2>trying to use multiple slot</h2> <!-- Here the inner HTML comming from parent component is replaced with the inner HTML of slot.
                                                 if no html content is comming from parent then slot innerHTML will be displayed.  -->
        </slot>
        <slot><h3>slot with inner html in child component</h3></slot>
    </div>
</template>

<script>
export default {
    name:'slotChild',
    props:{
        data:String
    }
}
</script>

<style scoped>
h1{
    color:green;
}
.parent{
    border-bottom:lightblue solid 1px;
}
</style>