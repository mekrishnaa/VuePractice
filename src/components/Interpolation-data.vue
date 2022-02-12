<template>
    <div>
        <p>My name is <strong>{{name}}</strong></p>
        <p>My age is <strong>{{age=24}}</strong></p>
        <p>My email is <strong>{{email}}</strong></p>
        <p>My phone number is <strong>{{phone}}</strong></p>
        <p>My address is <strong>{{getAddress()}}</strong></p>
        <p>My salary is <strong>{{getSalary(50000)}}</strong></p>
        <p>Are you eligible for Voting <strong>{{eligibleForVote(age)}}</strong></p>
    </div>
</template>

<script>
export default {
    name:'InterpolationData',
    data(){
        return {
            name:'krishna',
            age:'',
            email:'mewithkrishna@gmail.com',
            phone:'9705081807',
            getAddress:function(){
                return "Saharsa, Bihar, India"
            }
        }
    },
    methods: {
        getSalary(salary){
            return salary;
        },
        eligibleForVote(age){
            alert(this.age);
            if(age>18) return true;
            else return false;
        }
    },
}
</script>