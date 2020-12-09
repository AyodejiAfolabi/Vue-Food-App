<template>
    <div id="base">
    <div class="top">
  <h1 class="text-white tit">WELCOME TO LIVE DINNER</h1>
  <h1 class="text-white tits">WE PROVIDE YOU WITH BOTH LOCAL AND INTERNATIONAL DELICACIES</h1>  
  </div>
  <h1 class="t">CHECK CART</h1><button @click="buy" class="btn btn-danger sub">Check Out</button>
  <div id="tota" class="topp">
     <div  :key="i" v-for="(x,i) in ar" id="total" class="col-md-3 spe">
         <img class="im" :src="x.img">
         <span class="ct">Name: {{x.foods}}</span>
         <span class="ct">Price: #{{x.prices}}</span>
         <button @click="fun(i)" class="btn btn-danger ct">Remove</button>
     </div>
           </div>
    </div>
</template>
<script>
export default {
     name:'customerCart',
    data(){
        return{
ar:JSON.parse(localStorage.getItem('cart'))
        }
    },
    created(){
    },
   methods:{
       fun(i){
        // console.log(e)
var exist=JSON.parse(localStorage.getItem('cart'))
exist.splice(i,1)
var list=document.querySelectorAll('total')
console.log(list)

// var lis=document.querySelectorAll('tota')
// list[i].remove()
localStorage.setItem('cart',JSON.stringify(exist))
// window.location.reload()
       },
       buy(){
           var arr=this.ar

var foods=[]
var totalCost=0
arr.forEach(
    function(each){
totalCost+=Number(each.prices)
foods.push(each.foods)
    }
)
var email=JSON.parse(localStorage.getItem('currentCustomer')).email
var accno=JSON.parse(localStorage.getItem('currentCustomer')).accno
var d = new Date();
var  e=`${new Date().getHours()}: ${new Date().getMinutes()}:${new Date().getSeconds()}`
var date= d.toDateString()+` ${e}`;
this.$router.push('/cct')
 var myCart={foodss:foods,TotalCost:totalCost,email,accno,date}
console.log(myCart)

 if(localStorage.getItem('totalCart')!==null){
        var totalCart=JSON.parse(localStorage.getItem('totalCart'))
    }
    else{
        totalCart=[]
    }
    totalCart.push(myCart)
    console.log(totalCart)
    localStorage.setItem('totalCart',JSON.stringify(totalCart))
this.ar=[]
localStorage.setItem('cart',JSON.stringify(this.ar))
       }
   }

}
</script>
<style scoped>
.top{
    cursor: pointer;
    background-color: red;
    width: 100%;
    opacity: .8;
    height: 12%;
    font-family:fantasy;
   
        margin-top: -50px;
    
}

.tit{
  
    font-size: 20px;
    font-family:Georgia, 'Times New Roman', Times, serif
}
.tits{
    
    font-size: 20px;
    font-family:cursive;
}
.t{
    /* line-height: 1px; */
    color: black;
    font-size: 30px;
    text-decoration: underline;
    display: inline;
    font-family: cursive;
}
.topp{
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    flex-wrap: wrap;
}
.spe{
    /* width: 23%; */
    margin-top: 10px;;
    background-color: gold;
    height: 300px;
}
.im{
    width: 100%;
    height: 50%;
}
.ct{
    display: block;
    font-size: 19px;
    border-radius: 10px;;
    color: black;
}
.sub{
    margin-left:100px;
    border-radius: 7px;
}
#base{
    background-color: white;
    height: 1200px;
}
</style>