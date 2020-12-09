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
   <div class="form-group">
   <label class="text-success tit">Name:</label>
    <input placeholder="e.g Cristiano Ronaldo" class="form-control" v-model="name">
    
    <span v-if="!$v.name.required && $v.name.$dirty" class="text-danger">Name is required</span>
    <span class="text-danger" v-if="!$v.name.alpha && $v.name.$dirty">Alphabetic chracters only</span>
   </div>
  
 <!-- EMAIL -->
 <div class="form-group">
   <label class="text-success tit">email:</label>
    <input placeholder="e.g fabregas4@pp.com" class="form-control" type="email" v-model="email">
    
    <span  v-if="!$v.email.required && $v.email.$dirty" class="text-danger">email is required</span>
    <span class="text-danger" v-if="!$v.email.email  && $v.email.$dirty">Use a valid email </span>
 </div>
  <!-- Acconut INfo -->
  <div class="form-group">
   <label class="text-success tit">Account-NO.:</label>
    <input placeholder="10 digit NO. required" class="form-control" type="number" v-model="account">
    
    <span  v-if="!$v.account.required && $v.account.$dirty" class="text-danger">Acc NO. is required</span>
    <span class="text-danger" v-if="!$v.account.maxLength  && $v.email.$dirty">Must not exceed 10 digits </span>
     <span class="text-danger" v-if="!$v.account.minLength  && $v.email.$dirty"> 10 digits required</span>
 </div>
 
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
  <input type="submit" @click="confirmation"  class=" btn-danger mt-2 btn ">

 </form>
    </div>
</div>


</template>


<script>
import {minLength,maxLength,required,email,alpha} from 'vuelidate/lib/validators'

export default{
  name:'signup',

  data(){
    return{
name:'',
email:'',
password:'',
account:''
}
  },
    
    validations:{
      name:{
        required,
        alpha
        
      },
      email:{
        required,
        email
      },
      password:{
        required,
        maxLength:maxLength(12),
        minLength:minLength(4)
      },
      account:{
        required,
        maxLength:maxLength(10),
        minLength:minLength(10)
      }
    },
    created(){
    localStorage.setItem('password',1234)
      localStorage.setItem('name','Degood')
        localStorage.setItem('email','degood@food.com')

},
    methods:{
confirmation(){
 
},


      submitForm(){
        

this.$v.$touch()
if (!this.$v.$invalid) {
// this.$router.push('/customer')
  console.log(`Name: ${this.name} 
  Email:${this.email}
  account :${this.account}
   Password:${this.password} 
  
   `)
  if(localStorage.getItem('customers')!==null){
      var ar=JSON.parse(localStorage.getItem('customers'))
  }
  else{
      ar=[]
  }
  var obj={name:this.name,email:this.email,password:this.password,accno:this.account}
  ar=[...ar,obj]
  console.log(ar)
  localStorage.setItem('customers',JSON.stringify(ar))
   this.$router.push('/customer')
}
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