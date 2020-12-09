<template>
    <div>
    <div @click="sss" class="top a" style="color:black; display: flex; ">
  <div class="sub" id="disp">
      </div>
       <div class="sub">
           <img style="height:150px;border-radius:5px; margin-top:4px; width:295px; display:none; margin-left:90px; " id="fooddisp" src=""><br>
<h2 id="desc" class="t"></h2>
<span id="war" class="text-danger"></span>
<span id="pric" style="color:black; margin-top:-40px;  font-size: 20px;
    font-family: cursive;
"></span>
<div style="display:flex;  justify-content:space-around; margin-top:-2px;">
    <button  @click="prev" class="c btn btn-danger">Previous</button>
<button @click="buy" class="btn btn-danger c">Buy</button>
<button  @click="next" class="btn btn-danger c">Next</button>
<button  @click="cart" class="btn btn-danger c">Cart <sup @click="cartFun" id="cartNo" style="margin-left:20px;font-size:20px;margin-top:-15px;">0</sup></button></div>
      </div>
        </div>
        
        <div style=" display: flex;" class="a">
<div class="subb" id="transs"  style="font-size:17px;overflow:auto; color:black;"></div>

<div class="subb text-success" style="font-size:17px;overflow:auto;">

  <span  :key="i" v-for="(x,i) in arp" class="spe">
        Your request to Buy <b style="font-size:25px">{{x}}</b> was successful
         <button @click="fun(i)" class="btn btn-success">Okay</button><hr>
         </span>
</div>
            </div>
    </div>
</template>
<script>
export default {
    name:'customer',
    data(){
        return{
            arp:JSON.parse(localStorage.getItem('success')),
            
myArr:'',
index:'',
f:'',
ars:[],
by:'',

        }
},
created(){
  
    var arr=JSON.parse(localStorage.getItem('foodArr'))
        console.log(arr[0])
        this.myArr=arr
        var check=new Date
        arr=[]
    
var hr=check.getMinutes()
this.myArr.forEach(function(each){
    
      each.now=hr
      if(each.now<each.then){
          arr.push(each)
      }

    })
    localStorage.setItem('foodArr',JSON.stringify(arr))
    },

    mounted(){
          if(localStorage.getItem('cart')!==null){
  document.getElementById('cartNo').innerHTML=JSON.parse(localStorage.getItem('cart')).length
    }
        if(localStorage.getItem('request')!==null){
            this.ars=JSON.parse(localStorage.getItem('request'))
        }
        else{
            this.ars=[]
        }
 var arr=JSON.parse(localStorage.getItem('foodArr'))
        console.log(arr[0])
        this.myArr=arr
        var obj=''
        console.log(obj)
    const disp=document.getElementById('disp')
    this.myArr.forEach(function(obj,i){
const show=document.createElement('span')
const btn=document.createElement('button')
btn.append(document.createTextNode('Details'))
btn.setAttribute('class','btn btn-danger ')
show.setAttribute('style',' font-size: 20px;font-family: cursive;')
btn.setAttribute('style',' border-radius: 10px; font-family: cursive;float:right;')
btn.setAttribute('onclick',"localStorage.setItem('haha',event.target.previousSibling.innerHTML)")
     show.append(document.createTextNode(obj.foods))
     disp.append(show)
     disp.append(btn)
     disp.append(document.createElement('hr'))
     console.log(disp)
     console.log(obj)
     console.log(i)
    
});
 document.getElementById('transs').innerHTML=''
    if(localStorage.getItem('request')!==null){
var products=JSON.parse(localStorage.getItem('request'))
    }
    else{
products=[]
    }
   
      products.forEach(
        function(a){
       var words=`Your request to buy <b style="font-size:20px;">${a.foods}</b> has been successfully sent to De Good<hr>`
// ar.push(this.by.foods)
document.getElementById('transs').innerHTML+=words

}
        
    )
 
},
methods:{
    sss(e){
        var c;
    var myArrs=JSON.parse(localStorage.getItem('foodArr'))
if(e.target.innerHTML=='Details'){  
      var arrs=''
    this.myArr.forEach(function(each,i){
if(each.foods==localStorage.getItem('haha')){
     arrs=each
     console.log(myArrs,each)
    c=i
    console.log(c)
     console.log(myArrs.indexOf(each),222)
// console.log(arrs,123456789)
console.log(i)
}
    })
    this.f=c
    document.getElementById('fooddisp').src=arrs.img
   
 // #DISPlay
 this.by=arrs
 document.getElementById('fooddisp').style.display='block'
document.getElementById('desc').innerHTML=arrs.foods
document.getElementById('pric').innerHTML=`Available for #${arrs.prices}`

   
}
},
prev(){
console.log(this.f)
var myArrs=JSON.parse(localStorage.getItem('foodArr'))
var len=myArrs.length-1
console.log(len)
if(this.f==0){
    this.f=len
}
else{
    this.f=this.f-1
}
var arrs=myArrs[this.f]
this.by=arrs
document.getElementById('fooddisp').src=arrs.img
    if(arrs.img==''){
        document.getElementById('war').innerHTML='please insert an image'
        
    }
 // #DISPlay
 document.getElementById('fooddisp').style.display='block'
document.getElementById('desc').innerHTML=arrs.foods
document.getElementById('pric').innerHTML=`Available for #${arrs.prices}`

   

},
next(){
    console.log(this.f)
    var myArrs=JSON.parse(localStorage.getItem('foodArr'))
var len=myArrs.length-1
console.log(len)
if(this.f==len){
    this.f=0
}
else{
    this.f=this.f+1
}
var arrs=myArrs[this.f]
this.by=arrs
document.getElementById('fooddisp').src=arrs.img
    if(arrs.img==''){
        document.getElementById('war').innerHTML='please insert an image'
        
    }
 // #DISPlay
 else{
 document.getElementById('fooddisp').style.display='block'
document.getElementById('desc').innerHTML=arrs.foods
document.getElementById('pric').innerHTML=`Available for #${arrs.prices}`
 }
   


},
buy(){
    document.getElementById('transs').innerHTML=''
    if(localStorage.getItem('request')!==null){
var products=JSON.parse(localStorage.getItem('request'))
    }
    else{
products=[]
    }
    var product=this.by
    var b=0
  
    products.forEach(
        function(a){
          if(a.foods==product.foods){
b++
// alert(a)
}
        }
    )
    // alert(b)
    if(b==0){
          products.push(product)
          localStorage.setItem('request',JSON.stringify(products))
          }
          else{
              alert('Already Added')
          }

          products.forEach(
        function(a){
       var words=`Your request to buy <b style="font-size:20px;">${a.foods}</b> has been successfully sent to De Good<hr>`
// ar.push(this.by.foods)
document.getElementById('transs').innerHTML+=words

}
        
    )
 
//     var ar=this.ars
//     var words=`Your request to buy <b style="font-size:20px;">${this.by.foods}</b> has been successfully sent to De Good<hr>`
// ar.push(this.by.foods)
// document.getElementById('trans').innerHTML+=words

// localStorage.setItem('request',JSON.stringify(ar))
},
cart(){
    if(localStorage.getItem('cart')!==null){
        var cart=JSON.parse(localStorage.getItem('cart'))
    }
    else{
        cart=[]
    }
  var sav=this.by
// fff
 var b=0
    cart.forEach(
        function(a){
          if(a.foods==sav.foods){
b++
// alert(a)
}
        }
    )
    if(b==0){
          cart.push(this.by)
          var d=Number(document.getElementById('cartNo').innerHTML)
          document.getElementById('cartNo').innerHTML=d+1
    localStorage.setItem('cart',JSON.stringify(cart))
    }
    
   else{
       alert('false')
    //    document.getElementById('war').innerHTML='please fill in all inputs'
   }
    
    

   
// fff
  
},
cartFun(){
    this.$router.push('/cart')
}
}


}
</script>
<style scoped>
.top{
    cursor: pointer;
    /* background-color: red; */
    width: 100%;
    opacity: .8;
    height: 50%;
    font-family:fantasy;
   
        margin-top: -50px;
    
}
.a{
    height: 55%;
    cursor: pointer;
    width: 100%;
    /* opacity: .1; */
    background-color: white;
    /* border: 1px solid red; */
    border-radius: 7px;
}
.img{
    border-radius: 100%;
    height: 60%;
    width: 100%;
    cursor:grab;    /* margin-left: -20px; */
}
.tit{

    font-family:Georgia, 'Times New Roman', Times, serif;
}
.tits{
    /* line-height: 1px; */
    /* margin-top:-50px; */
    /* margin-left: 5%; */
    font-size: 20px;
    font-family:cursive;
}
.t{
    line-height: 1px;
    font-size: 30px;
    font-family: cursive;
}
.topp{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.sub{
    width: 100%;
    height: 95%;
    border: 1px ridge red;
    overflow: auto;
}
.subb{
    width: 100%;
    height: 95%;
    border: 1px ridge red;
}
.t{
    /* line-height: 1px; */
    margin-top:-30px;
    font-size: 30px;
    font-family: cursive;
}
.c{
    border-radius: 10px;
    box-sizing: border-box;
}

</style>