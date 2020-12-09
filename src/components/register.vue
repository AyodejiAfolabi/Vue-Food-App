<template>
    <div>
        <h1>This is the Test Component</h1>
        <h1>There are {{getNum}} oranges in the Basket</h1>
        <h1>My name is {{getName}}</h1>

        <button @click="increment(6)">Increase</button><br><br>
        <!-- <button @click="increment(-1)">Decrease</button> -->
        <button @click="decrement(-6)">Decrease</button>
        </div>
</template>


<script>
import {mapGetters,mapActions} from 'vuex' 
export default {
    name:'register',
    computed:mapGetters(['getNum','getName']),
    data(){
        return{

        }
    },
    methods:
        // {...
        mapActions(['increment','decrement'])
        // decrement(anything){
        //     this.minus(anything);
        // }
        // }
    
}
</script>
<style lang="stylus" scoped>

</style>