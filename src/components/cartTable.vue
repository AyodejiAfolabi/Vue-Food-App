<template>
    <div>
<table class="table table-striped table-bordered table-responsive bb bg-warning">
    <thead>
        <tr>
        <th style="width:10px">Cart_id</th>
            <th style="width:250px;">Items</th>
                <th>Total Cost(#)</th>
                <th>cust.. _email</th>
                <th>Trans_Time</th>
            <th>AccountNo</th>
                <th>Action</th>
        </tr>
    </thead>
    <tbody :key="i" v-for="(x,i) in arr">
  <tr class="cc">
        <td>{{i}}</td>
        <div  style="max-height:60px;overflow:auto;"  >
        <span :key="z" v-for="(y,z) in x.foodss"> {{y}}<hr> </span>
        </div>
        <td>{{x.TotalCost}}</td>
        <td>{{x.email}}</td>
        <td>{{x.date}}</td>
        <td>{{x.accno}}</td>
        <td v-if="typeof(ar[i])==Boolean"><button class="btn btn-success a" id="act" @click="act(i)">Accept</button>
        <button class="btn btn-danger b" id="ign" @click="ign(i)">Ignore</button></td>
<td v-else>Compvared</td>
</tr>
    </tbody>
</table>

    </div>
</template>
<script>
export default {
    name:'cartTable',
    data(){
        return{
arr:JSON.parse(localStorage.getItem('totalCart')),
ar:[]
        }
        
    },
    created(){
JSON.parse(localStorage.getItem('totalCart')).forEach(each => {
    this.ar.push(each.status)
    console.log(this.ar)
})

    },
    methods:{
            act(i){
            
                var acc=Number(localStorage.getItem('acc'))
                if((localStorage.getItem('acc')==null)){
                    acc=0
                }
                acc+=Number(this.arr[i].TotalCost)
                localStorage.setItem('acc',acc)
                document.getElementById('ign').disabled=true;
                 document.getElementById('act').disabled=true
                 var ar=JSON.parse(localStorage.getItem('totalCart'))
                 var ars=ar[i]
                 ars.status=true
                 ar[i]=ars
                 localStorage.setItem('totalCart',JSON.stringify(ar))
            },
            ign(i){
                 document.getElementById('ign').disabled=true;
                 document.getElementById('act').disabled=true
                 var ar=JSON.parse(localStorage.getItem('totalCart'))
                 var ars=ar[i]
                 ars.status=false
                 ar[i]=ars
                 localStorage.setItem('totalCart',JSON.stringify(ar))
      
            }
        }
}
</script>
<style>

.bb{
    color: black;
    width: 100%;
    font-size: 20px;;
    /* border: 1px solid red; */
}

tbody{
    margin-top: 20px;
}
.a{
    width: 90px;
    font-size: 10px;
border-radius: 7px;
}
.b{
    width: 100px;
    font-size: 10px;
margin-left: 10px;
border-radius: 7px;
}
</style>