<template>
    <div>
       <h1> watchers in vue 3</h1>
       <h3>count is: {{count}}</h3>
       <button v-on:click="count+=1"> + </button>
       <button v-on:click="count-=1"> - </button>

    </div>
</template>

<script>
export default {
    name:'watchers',
    data() {
        return {
            count:0
        }
    },
    watch:{
        count(val,prev){
            if(val>=5)
                alert("stop counting");
            else if(prev==4)
                console.log("reached to the boundry");

            console.log(val,prev);
        }
    }
    // methods: {
    //     inc(){
    //         this.count+=1;
    //     }
    // },

}
</script>

<style  scoped>
h1{
    color:grey;
}
h3{
    color:orange;
    font-size: 40px;
    
}
</style>