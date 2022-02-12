<template>
    <div>
        <h2>Before Unmount And Unmounted Example</h2>
        <button @click="show=!show">Hide below Content</button>
        <used-in-before-unmount v-if="show"/>
    </div>
</template>

<script>
import UsedInBeforeUnmount from './usedInBeforeUnmount.vue'
export default {
    name:'before-unmount-and-unmounted',
    components:{UsedInBeforeUnmount},
    data() {
        return {
            show:true
        }
    },

    
}
</script>