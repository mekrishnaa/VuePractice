<template>
    <div>
    <div>
        <input type="text" placeholder="Enter Email" v-model="email" v-on:change="onChange()"/>
        <br />
        <br />
        <input type="password" placeholder = "Enter Password"  v-model="password"/>
        <br />
        <br />
        <button v-on:click="getInputedValues()" > show value </button>
    </div>
    <div>
        <h3>Gender</h3>
        <input type="radio" value="male" id="male" name="gender" v-model="gender"/><label for="male">Male</label>
        <input type="radio" value="female" id="female" name="gender" v-model="gender"/><label for="female">Female</label>
        <br/>
        <h4>selected Gender : {{gender}}</h4><br/><br/>
    </div>
    <div>
        <h2>Checkboxes and radio button </h2>
        <h3> Technology </h3>
        <input type="checkbox" value="java" id="java" v-model="technology"/> <label for="java" >Java</label><br/>
        <input type="checkbox" value="python" id="python" v-model="technology" /> <label for="python">Python </label><br/>
        <input type="checkbox" value="JavaScript" id="JavaScript" v-model="technology"/> <label for="JavaScript">JavaScript </label><br/>
        <input type="checkbox" value="Cpp" id="Cpp" v-model="technology" /> <label for="Cpp">C++ </label><br/>
        <h4> Selected Technology : {{technology}} </h4> <br/><br/>
    </div>
    </div>
</template>
<script>
export default {
    name:'getInputValue',
    data(){
        return{
            email:null,
            password:null,
            technology:[],
            gender:null,
        }
    },
    methods: {
        getInputedValues(){
            console.warn("function called");
            console.log(this.email);
            console.log(this.password);
        },
        onChange(){
            console.log(this.email);
        }
    },

}
</script>