<template>
<div>
    <h1>Simple form in vue</h1>
    <p v-if="isLogin">{{formData}}</p>
    <label for="name">Name:</label>
    <input type="text" name="name" id="name" v-model="formData.name" placeholder="Enter Name" />
    <br><br>
    <label for="Gender">Gender</label> <br>
    <input type="radio" name="gender" id="male" value="male" v-model="formData.gender"/><label for="male">Male</label> 
    &nbsp;&nbsp;
    <input type="radio" name="gender" id="female" value="female" v-model="formData.gender"/><label for="female">Female</label>
    <br><br>
    <label for="email">Email:</label>
    <input type="email" name="email" id="email" placeholder="Enter email" v-model="formData.email" />
    <br /><br />
    <label for="password">Password:</label>
    <input type="password" name="password" id="password" placeholder="Enter password" v-model="formData.password" />
    <br><br>
    <label for="country">Country</label>
    <select name="country" id="country" v-model="formData.country">
        <option value="india">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="france">France</option>
        <option value="germeny">Germeny</option>        
        <option value="china">China</option>        
        <option value="japan">Japan</option>        
        <option value="russia">Russia</option>        
        <option value="rok">South Korea</option>        
    </select>
    <br><br>
    <label for="technology">Technology:</label><br>
        <input type="checkbox" name="js" id="js" value="js" v-model="formData.technology"><label for="js">JavaScript</label><br>
        <input type="checkbox" name="cpp" id="cpp" value="cpp" v-model="formData.technology"><label for="cpp">C++</label><br>
        <input type="checkbox" name="python" id="python" value="python" v-model="formData.technology"><label for="python">Python</label><br>
        <input type="checkbox" name="java" id="java" value="java" v-model="formData.technology"><label for="java">Java</label><br>
        <input type="checkbox" name="go" id="go" value="go" v-model="formData.technology"><label for="go">Go</label><br>
    <br><br>
    <button type="button" v-on:click="login">Login</button>
</div>
</template>

<script>
export default {
    name: 'simpleForm',
    data() {
        return {
            formData: {
                name: '',
                email: '',
                password: '',
                country: '',
                technology: [],
                gender: '',

            },
            isLogin: false,
            error:[],
        }
    },
    methods: {
        login() {
            // this.isLogin = true;
            this.error=[];
            for(const item in this.formData){
                if(this.formData[item]==="" || this.formData[item].length==0){
                    this.error.push(item);
                }
            }
            if(this.error.length==0)alert("data submitted successfully");
            else alert(this.error.length + " fields is still empty. please fill all fields");
            console.log(this.formData);
            console.log(this.error);
        }
    },
}
</script>

<style scoped>
h1 {
    color: green;
}
</style>
