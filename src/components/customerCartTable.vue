<template>
    <div>
<table class="table table-striped table-bordered bb bg-warning">
    <thead>
        <tr>
        <th style="width:10px">Cart_id</th>
            <th style="width:250px;">Items</th>
                <th>Total Cost(#)</th>
                <th>cust.. _email</th>
            <th>AccountNo</th>
                <th>Trans_Time</th>
                <th>Status</th>
        </tr>
    </thead>
    <tbody :key="i" v-for="(x,i) in arr">
  <tr class="cc">
        <td>{{i+1}}</td>
        <div   style="max-height:60px;overflow:auto;"  >
        <span :key="z" v-for="(y,z) in x.foodss"> {{y}}<hr> </span>
        </div>
        <td>{{x.TotalCost}}</td>
        <td>{{x.email}}</td>
        <td>{{x.accno}}</td>
        <td>{{x.date}}</td>   


        
        <span v-if="x.status"><td class="bg-success"></td></span>
        <span v-else-if="x.status==false"><td class="bg-danger"></td></span>
        <span v-else><td class="bg-primary"></td></span>
</tr>
    </tbody>
</table>

    </div>
</template>
<script>
export default {
    name:'customerCartTable',
    data(){
        return{
arr:JSON.parse(localStorage.getItem('totalCart'))
        }
    },
    created(){
        let port=[]
        // let ar=this.arr
        let email=JSON.parse(localStorage.getItem('currentCustomer')).email
let accno=JSON.parse(localStorage.getItem('currentCustomer')).accno





let totalCart=JSON.parse(localStorage.getItem('totalCart'))
    totalCart.forEach(each => {
        if(each.email==email&&each.accno==accno){
port.push(each)
        }
    });

this.arr=port
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


.pmb{
    background-color: pink;
}
.act{
    background-color:yellow;
}
.ign{
background-color: pink;
}

</style>