<template>

<div class="bg-success md">
    <div class="coll">
<h2 style="text-decoration:underline; cursor:pointer;"> LOGIN</h2><hr>
  <!-- <input type="checkbox" > -->


<div class="form-group">
  <!-- <label class="tit text-success">Select Mode</label> -->
    <!-- <select  class="form-control" v-model="gender"> -->
      <!-- <option value="Admin">Admin</option> -->
      <div class="tit text-success">Customer Mode</div> <hr>
    <!-- </select> -->
     </div>
  

<form @click.prevent="submitForm"> 
<!-- NAME -->
  <!-- EMAIL -->
 <div class="form-group">
   <label class="text-success tit">email:</label>
    <input placeholder="e.g fabregas4@pp.com" class="form-control" type="email" v-model="email">
    
    <span  v-if="!$v.email.required && $v.email.$dirty" class="text-danger">email is required</span>
    <span class="text-danger" v-if="!$v.email.email  && $v.email.$dirty">Use a valid email </span>
 </div>
  <!-- Acconut INfo -->
  
  <!-- PASSWORD -->
  <div class="form-group">
   <label class="text-success tit">password:</label>
    <input placeholder="e.g password" class="form-control" v-model="password">
    
    <span  v-if="!$v.password.required && $v.password.$dirty" class="text-danger">password is required  </span>
    <span  v-if="(!$v.password.minLength || !$v.password.maxLength  ) && $v.password.$dirty" class="text-danger">password must be between 4 to 12 characters </span>
    <!-- <span  class="text-danger" v-if=" !$v.password.maxLength  && $v.password.$dirty">PAssword must be between {{$v.$params.password.minLenghth.min}}&& {{$v.$params.password.maxnghth.max}} characters</span> -->
    </div>
    <!-- <span class="text-danger" v-if="(!$v.password.maxLength ) && $v.password.$dirty">PAssword is long</span> -->
  <!-- GENDER -->
    <div id="warning" class="text-warning"> </div><br>
  <input type="submit"  class=" btn-danger mt-2 btn ">

 </form>
    </div>
</div>


</template>


<script>
import {minLength,maxLength,required,email} from 'vuelidate/lib/validators'

export default{
  name:'formValid',

  data(){
    return{

email:'',
password:'',


}
  },
    
    validations:{
      
      email:{
        required,
        email
      },
      password:{
        required,
        maxLength:maxLength(12),
        minLength:minLength(4)
      },
       
    },
    created(){
    localStorage.setItem('password',1234)
  
        localStorage.setItem('email','degood@food.com')

},
    methods:{

route(){
this.$router.push('/customer')
},
back(){
// this.$router.push('/sup')
}
,
      submitForm(){
        

this.$v.$touch()
if (!this.$v.$invalid) {
  console.log(this.email,this.password)
  var email=this.email
  var password=this.password
  var ar=JSON.parse(localStorage.getItem('customers'))
  // console.log(typeof(this.password))
var a=0
  ar.forEach(
    function(each){

if(password==each.password&&email==each.email){
  a++
  
  localStorage.setItem('currentCustomer',JSON.stringify(each))
  // this.$router.push('/customer')
}
    }
  )
  // 

  
}
// 
if(a==1){
this.route()
}
// else{
//   var tim=setTimeout(alert(8),2000)
//   console.log(tim)
// }
      }


  
  
}

}
</script>
<style>

.text-danger{
  font-size: 15px;
}
.tit{
    font-size: 25px;
}
.md{
    margin-top: -10px;
}
.coll{
    width: 50%;
    margin-left: 25%;
}

/* @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"); */
</style>