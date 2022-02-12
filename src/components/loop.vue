<template>
    <div>
        <h1> Loop in Vue </h1>
        <div>
            <p>Technologies </p>
            <ul>
                <li v-for="elem in technology" :key="elem">
                    {{elem}}
                </li>
            </ul>
        </div>
        <div>
            <p>Users</p>
            <ul>
                <li>
                    <strong>Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Age &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Language   </strong>
                </li>
                <li v-for="user in users" :key="user.name">
                    {{user.name}}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   {{user.age}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   {{user.language}}
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name:'loop',
    data() {
        return {
            technology:['javaScript','C++','Python','Java','Node'],
            users:[
                {name:'krishna', age:24, language:'Hindi'},
                {name:'Golu', age:20, language:'Hindi'},
                {name:'Mark', age:32, language:'English'},
                {name:'Professor', age:42, language:'French'},
                {name:'Matt', age:32, language:'English'},
                {name:'Rama', age:28, language:'Sanskrit'},
            ]
        }
    }
}
</script>

<style scoped>
h1{
    color:red
}
</style>