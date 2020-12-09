<template>
    <div style="margin-top:200px" class="bg-danger">
        {{name}}
    </div>
</template>
<style>

</style>
<script>
export default {
    created(){
        alert(99)
    }, 
    name:'comeback',
    data(){
        return{
            name:'AdaObi',
            arr:[1,2,3,4]
        }
    }
}
</script>
