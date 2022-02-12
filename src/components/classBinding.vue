<template>
    <div>
        <div>
            <p :class="{heading:colorfull}">Class Binding For Dynamic Styling 😁...</p>
            <button v-on:click="colorfull=!colorfull" class="btn"><span v-if="!colorfull">Zoom In </span><span v-else>Zoom Out</span> </button>
        </div>
        <br><br>
        <div>
            <p :class="applyStyle">Adding class using applyStyle function </p>
        </div>
    </div>

</template>

<script>
export default {
    name:'classBinding',
    data() {
        return {
            colorfull:false
        }
    },
    computed:{
        applyStyle(){
            return {
                
                    heading:false,
                    err:true,
                    fontsize:true,
                    bcolor:true    
                
            }
        }
    }
}
</script>

<style scoped>
p{
    color:green;
}

.heading{
    font-weight:bold;
    font-style:Italic;
    font-size:50px;
    
}
.btn{
    position:fixed;
    top:200px;
    color:blue;
    background-color:lightgrey;
    width:70px;
    height:50px;
    border-radius:50%;
}

.errCode{
    color:red;
}
.fontsize{
    font-size:20px;
}
.bcolor{
    background-color:lightgreen;
}
</style>