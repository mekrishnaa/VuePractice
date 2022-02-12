<template>
    <div>
        <h2 ref="tagcontent">Before Unmount And Unmounted Helper Component</h2>
    </div>
</template>

<script>
export default {
    name:'used-in-before-unmount',
    beforeUnmount() {
        console.log(this.$refs['tagcontent'].textContent);
        alert("calling before unmount");
    },
    unmounted() {
        console.log(this.$refs['tagcontent'].textContent);
        alert("calling when unmounted");
    },
    
    
}
</script>