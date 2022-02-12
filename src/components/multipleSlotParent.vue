<template>
    <div>
        <multiple-slot-child>
            <template v-slot:header> <!-- always use template if using multiple slot with name --->
                <h1>T-shirt</h1>
            </template>
            <template v-slot:main>
                <p>A vue product </p>
            </template>
            <template v-slot:footer>
                <button>buy now</button>
            </template>
               
        </multiple-slot-child>
        <multiple-slot-child>
            <template v-slot:header> <!-- always use template if using multiple slot with name --->
                <h1>Jeans</h1>
            </template>
            <template v-slot:main>
                <p>A vue product </p>
            </template>
            <template v-slot:footer>
                
            </template>
               
        </multiple-slot-child>
    </div>
</template>

<script>
import multipleSlotChild from './multipleSlotChild.vue'
export default {
  components: { multipleSlotChild },
    name:'multiple-slot-parent',
}
</script>
<style scoped>
h1{
    color:green;
}
</style>