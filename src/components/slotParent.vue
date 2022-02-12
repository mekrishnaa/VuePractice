<template>
    <div>
        <h1>Slot in vue (Parent component)</h1>
        <slot-child data="Krishna kumar"/>
        <!-- <slot-child>
            <h3>Sending data to child through slots</h3>
        </slot-child>
        <slot-child>
            <a href="#">Google</a>
        </slot-child>
        <slot-child>
            <img src="https://images.unsplash.com/photo-1580294069745-c056af1277ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NDQ5NDY3MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300" alt="img">
        </slot-child> -->
        <!-- <slot-child></slot-child> -->
        <slot-child>
            <h3>Peter click on Button</h3>
            <button type="button">Click me</button>    
        </slot-child>
    </div>
</template>

<script>
import slotChild from './slotChild.vue'

export default {
  components: { slotChild },
    name:'slotParent'
}
</script>

<style scoped>
h1{
    color:green;
}
</style>