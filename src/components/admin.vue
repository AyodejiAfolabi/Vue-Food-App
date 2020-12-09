<template>
    <div>
        <h3 id="test" class="tit">LIVE DINNER</h3><br><br>
        <div class="top" style="display:flex;">
<div ><img class="img" src="./live-dinner/images/chef1.jpg" alt=""></div>
     <div ><img class="img" src="./live-dinner/images/chef2.jpg" alt=""></div>
 <div ><img class="img" src="./live-dinner/images/chef3.jpg" alt=""></div>
        
        </div><br><br><b></b>
        <div class="top a">
            <h3 class="t"><span style="margin-left:120px;opacity:.8;">ADMIN PORTAL</span> <span class="t" style="color:black;opacity:.8; margin-left:40%;" >TRANSACTIONS</span></h3><br>
            <div class="tops" style="display:flex;">
<div class="suba">
    <input class="foodinp" v-model="food" placeholder="Type Available Dish">
    <input class="foodinp" type="number" v-model="price" placeholder="Price in Naira(0.00)">

        <input id="fil" style="margin-top:15px;margin-left:120px" type="file" name="">
    <input  @click="add" class="btn btn-danger ac" 
    style="display:block; margin-top:15px; margin-left:110px" type="submit">
<div>

</div>
</div>

<div id="tt" class="subb" style="display:flex;">
     <div id="tst" style="width:50%;">
        <img style="height:130px; width:295px; display:none; margin-left:20px; " id="fooddisp" src=""><br>

<span id="war" class="text-danger"></span>
<h2 id="desc" class="t"></h2>
<span id="war" class="text-danger"></span>
<span id="pric" style="color:black;  font-size: 20px;
    font-family: cursive;
"></span>
    </div>
    <div style="width:50%; border-left:1px solid orange;">

<div id="trans" style="width:95%; height:60%;color:black; margin-left:10px; overflow:auto; border:1px groove black ;">
    <span  :key="i" v-for="(x,i) in ar" class="spe">
       Item:  <b style="font-size:20px">{{x.foods}}</b>  <button @click="fu(i)" class="btn btn-danger ct">Details</button><br><br>
         <button @click="fun(i)" class="btn btn-danger ct">Accept</button>
         <button @click="func(i)" class="btn btn-danger ct">Remove</button><hr>
     </span>
    
   
   </div><br>
<div class="t" style="color:black">ACC.BAL(#)</div>
<hr>
<div id="t" class="t" style="color:black">0.00</div>


    </div>
</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'admin',
    data(){
        return{
            ar:JSON.parse(localStorage.getItem('request')),
            food:'',
            price:'',
            foodArr:[],
            foodObj:{},
            abbs:''
        
        }
       },
       mounted(){
if(localStorage.getItem('acc')!==null){
              var abb=localStorage.getItem('acc',abb)
              document.getElementById('t').innerHTML=`${abb}`
}
// else{
//      abb='0.00'
// }
            //   
// var ar=JSON.parse(localStorage.getItem('request'))
// ar.forEach(
//     function(word,i){
//         console.log(word)
//         document.getElementById('trans').innerHTML+=`<div><b style="float:left;">${word}</b>  <button style="margin-left:80px;">Accept</button>       <button>Ignore</button><hr><div>`
//         console.log(i)
//     }
// )
       },
       methods:{
 clear(){
     document.getElementById('desc').innerHTML=`.`
 },
        add(){
            
            // console.log(document.getElementById('test').innerHTML)
             let data=new Date;
let now=data.getMinutes();
let then=now+30;
let foods=this.food
let prices=this.price
var m=document.getElementById('fil').value;
console.log(m)
var n=m.lastIndexOf('\\')
m=m.slice(n+1,m.length)
console.log(m)
console.log(n);
let img=`./live-dinner/images/${m}`

// document.getElementById('fooddisp').src=`./live-dinner/images/${m}`
// document.getElementById('fooddisp').style.display='block'
// if (m=='') {
//     documendocument.getElementById('desc').innerHTML=foods
// document.getElementById('pric').innerHTML=`Available for #${prices}`
// document.getElementById('desc').innerHTML=foods
// document.getElementById('pric').innerHTML=`Available for #${prices}`
// document.getElementById('desc').innerHTML=foods
// document.getElementById('pric').innerHTML=`Available for #${prices}`
// t.getElementById('war').innerHTML='please insert an image'
// }
// else{
//     document.getElementById('war').innerHTML=''
// }

this.foodObj={foods,now,then,img,prices}
console.log(foods,now,then)

var foodObj=this.foodObj
if (localStorage.getItem('foodArr')!==null) {
    var exist=JSON.parse(localStorage.getItem('foodArr'))
    console.log(exist)
}
else{
    exist=[]
}
    var b=0
    exist.forEach(
        function(a){
          if(a.foods==foodObj.foods){
b++
// alert(a)
}
        }
    )
    if(b==0){
    if(foodObj.foods!=='' && m!==''  && foodObj.prices!==''){
        //    alert(a)
    exist.push(foodObj)
 
document.getElementById('desc').innerHTML=foods
document.getElementById('pric').innerHTML=`Available for #${prices}`

document.getElementById('fooddisp').src=`./live-dinner/images/${m}`
document.getElementById('fooddisp').style.display='block'
 document.getElementById('war').innerHTML='Saved Already'


    }
   
    // if(b>0){
    //      document.getElementById('tt').innerHTML='Already Saved'
    // }
   else{
       document.getElementById('war').innerHTML='please fill in all inputs'
   }
    
    

    localStorage.setItem('foodArr',JSON.stringify(exist))

}
          
//             else{
               
// this.foodArr.push(this.foodObj)
// localStorage.setItem('foodArr',JSON.stringify(this.foodArr))

//             }

        },
        fu(i){
            document.getElementById('fooddisp').style.display='none'
            document.getElementById('pric').innerHTML=''
             document.getElementById('desc').innerHTML=''
            document.getElementById('war').innerHTML=''
var arr=JSON.parse(localStorage.getItem('request'))
document.getElementById('pric').style.color='black'

document.getElementById('pric').innerHTML=`Name of Item: ${arr[i].foods}<br>
Price:   ${arr[i].prices}
<hr>
`
// document.getElementById('pric').innerHTML=`Available for #${prices}`

// document.getElementById('fooddisp').src=`./live-dinner/images/${m}`
// document.getElementById('fooddisp').style.display='block'
//  document.getElementById('war').innerHTML='Saved Already'

        },
        fun(i){
var exist=JSON.parse(localStorage.getItem('request'))
if(localStorage.getItem('acc')!==null){
    var abb=localStorage.getItem('acc')
}
else{
 abb=document.getElementById('t').innerHTML
}
if(localStorage.getItem('success')!==null){
    var succ=JSON.parse(localStorage.getItem('success'))
}
else{
 succ=[]
}

           abb= Number(abb)+Number(exist[i].prices)
           succ.push(exist[i].foods)
           localStorage.setItem('success',JSON.stringify(succ))
           document.getElementById('t').innerHTML=`${abb}`
           localStorage.setItem('acc',abb)
    exist.splice(i,1)
localStorage.setItem('request',JSON.stringify(exist))
window.location.reload()

        },
         func(i){
var exist=JSON.parse(localStorage.getItem('request'))
    exist.splice(i,1)
localStorage.setItem('request',JSON.stringify(exist))
window.location.reload()

    }
}
    
                       
}
</script>
<style scoped>
.top{
    background-color: red;
    width: 100%;
    height: 30%;
    margin-top: -50px;
}
.a{
    height: 55%;
    opacity: .9;
    background-color: white;
    border: 2px solid red;
    border-radius: 7px;
}
.img{
    border-radius: 100%;
    height: 100%;
    margin-left: -20px;
}
.tit{
    line-height: 1px;
    margin-top:-50px;
    font-size: 30px;
    font-family: cursive;
}
.t{
    line-height: 1px;
    /* margin-top:-50px; */
    font-size: 30px;
    font-family: cursive;
}
.tops{
    width: 100%;
    border-top: 1px solid orange;
    height: 260px;
    margin-top: -30px;
}
.suba{
    width: 50%;
    height: 100%;
    border-left: 1px solid orange;
}
.subb{
    width: 100%;
    height: 100%;
    border-left: 1px solid orange;
}
.foodinp{display: block;
  width: 100%;
  min-height: 15px;
  /* padding: 0.375rem 0.75rem; */
  font-size: 1rem;
  color: #171718;
  background-color: #fff;
  font-family: cursive;
margin-top: 3px;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius:8px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.ac{
    margin-top: 4px;
    border-radius: 8px;
    
    
}
.ct{
    /* display: block; */
    font-size: 10px;
    margin-left:30px;
    width: 110px;
    border-radius: 10px;;
    color: black;
}
</style>