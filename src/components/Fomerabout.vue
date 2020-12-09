<template>
    <div>
        <h1>This is Our About Page</h1>
        <h3>Welcome to Team {{$route.params.teamId}}</h3>
        <button @click="goHome">Home</button>
        Hello
        <register/>
    </div>
</template>
<script>
 import register from './register.vue'
export default {
    components:{register},
    watch:{'$route'(to){
console.log(to.params.teamId)
    }
    },
    created(){
    console.log(this.$route.params.teamId)
  },
    name:'About',
    
    methods:{

goHome(){
   this.$router.push('/')
 }
    }
}
</script>
<style>

</style>