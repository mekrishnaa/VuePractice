<template>
    <div>
        <h1>Non-props Data in vue (parent Component)</h1>
        <non-props-data-child data="from Parent" name="non-props-data" />
    </div>
</template>

<script>
import nonPropsDataChild from './nonPropsDataChild.vue'

export default {
  components: { nonPropsDataChild },
    name:'non-props-data-parent'
}
</script>
<style scoped>
h1{
    color:green;
}
</style>