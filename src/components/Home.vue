<template>
    <div>
    <div class="top">
  <h1 class="text-white tit">WELCOME TO LIVE DINNER</h1>
  <h1 class="text-white tits">WE PROVIDE YOU WITH BOTH LOCAL AND INTERNATIONAL DELICACIES</h1>
  <div class="topp">
      <div><img class="img" src="./live-dinner/images/img-03.jpg" alt=""></div>
     <div ><img class="img" src="./live-dinner/images/food1.jpg" alt=""></div>
 <div ><img class="img" src="./live-dinner/images/food4.jpg" alt=""></div>
        <div> <img class="img" src="./live-dinner/images/food3.jpg" alt=""></div>
  </div>
        </div>
        <div style=" display: flex;" class="a">
<div class="sub"></div>

<div class="suba">
    <h3 class="tit text-red">Menuments Available</h3>
    <div @click="ffs" class="sub" id="disp" >
<span :key="i" v-for="(s,i) in myArr" class="text-black">{{s.foods}}</span><button class="bg bg-danger">Purchase</button><hr>
      </div>
</div>
            </div>
    </div>
</template>
<script>
export default {
     name:'Home',
    data(){
        return{
myArr:JSON.parse(localStorage.getItem('foodArr'))

        }
    },
    mounted(){
        console.log(this.myArr)
//  let arr=
        // console.log(arr[0])
        // let myArr=''
        // this.myArr=arr
        // let obj=''
        // console.log(obj)
    //    for(obj in this.myArr){
    //        console.log(arr[obj])

    //        document.getElementById('disp').innerHTML+=obj
    //    }
//     const disp=document.getElementById('disp')
// // const list=document.createElement('ol')

//     this.myArr.forEach(function(obj,i){
//         // const list=document.createElement('span')

// const show=document.createElement('span')
// const btn=document.createElement('button')
// btn.append(document.createTextNode('Purchase'))
//  show.append(document.createTextNode(obj.foods))
// btn.setAttribute('class','btn btn-danger ')
// show.setAttribute('style','margin-left:7px; font-size: 20px; float:left;color:black;font-family: cursive;')
// btn.setAttribute('style',' border-radius: 10px; font-family: cursive;')
// btn.setAttribute('onclick',"localStorage.setItem('haha',event.target.previousSibling.innerHTML)")
// let f=localStorage.getItem('haha')
// this.f=f
// console.log(f)
    
    //  disp.append(show)
    //  disp.append(btn)
    //  disp.append(document.createElement('hr'))
    //  console.log(disp)
    // //  disp.append(list)


    //  console.log(obj)
    //  console.log(i)
    
// });

},
methods:{
    ffs(e){
if(e.target.innerHTML=='Purchase')
    {
this.$router.push('/form')
    }
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
    border-left: 1px solid red;
    border-radius: 7px;
}
.img{
    border-radius: 100%;
    height: 60%;
    width: 100%;
    cursor:grab    /* margin-left: -20px; */
}
.tit{
    /* line-height: 1px; */
    /* margin-top:-50px; */
    /* margin-left: 15%; */
    font-size: 20px;
    font-family:Georgia, 'Times New Roman', Times, serif
}
.tits{
    /* line-height: 1px; */
    /* margin-top:-50px; */
    margin-left: 5%;
    font-size: 20px;
    font-family:cursive;
}
.t{
    line-height: 1px;
    /* margin-top:-50px; */
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
    height: 100%;
    border: 1px solid red;
    border-left: none;
}
.suba{
    width: 100%;
    height: 95%;
    border: 1px solid red;
    border-left: none;
}

#disp{ 
    overflow: auto;
}
</style>