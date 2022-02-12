<template>
<div>
    <h2> Parent for passing data from child to parent </h2>
    <childForCtoP :getName="getUserName" />
    <h3>ChildName got from child Component is : {{childName}} </h3>
</div>
</template>

<script>
import childForCtoP from './childForCtoP.vue';
export default {
    name: 'parentForCtoP',
    components: {
        childForCtoP
    },
    data() {
        return {
            childName:''
        }
    },
    methods: {
        getUserName(name) {
            // alert(name);
            // alert("from parent component");
            this.childName=name;
        }
    },
}
</script>
