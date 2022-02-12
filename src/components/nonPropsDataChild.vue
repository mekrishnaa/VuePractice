<template>
    <div>
        <h1>Non-props Data in vue (Child Component)</h1>
        <h3 v-bind="$attrs">{{data}}</h3>
    </div>
</template>

<script>
export default {
    name:'non-props-data-child',
    inheritAttrs:false, // it is used when you want that the 
                        // only child element will get the attributes send from parent 
                        //but not the wrapper or parent element of that particular element. 
    props:{
        data:String  // if we declare any data comming from parent as props 
                     // then it will not be accepted as attrs or non-props data and vice-verse.
    }
}
</script>