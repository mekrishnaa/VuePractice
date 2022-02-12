<template>
    <div>
        <h1 v-on:mouseout="mousemoved(count)">Count : {{count}}</h1>
        <br>
        <button v-on:Click="clickMe(count)">Click me! </button>
    </div>
</template>

<script>
export default {
    name:'clickEvent',
    data() {
        return {
            count:0,
        }
    },
    methods: {
        clickMe(){
             this.count+=1;
        },
        mousemoved(data){
            data+=1;
            alert(this.count);
            alert(data);
        }
    },
}
</script>