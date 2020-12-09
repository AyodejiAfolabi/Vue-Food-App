<template>

<div class="bg-success md">
    <div class="coll">
<h2 style="text-decoration:underline; cursor:pointer;"> LOGIN</h2><hr>
  <!-- <input type="checkbox" > -->


<div class="form-group">
  <!-- <label class="tit text-danger">Select Mode</label> -->
    <!-- <select  class="form-control" v-model="gender"> -->
      <!-- <option value="Admin">Admin</option> -->
      <div class="tit text-danger">Admin Mode</div> <hr><br>
    <!-- </select> -->
    <span v-if="!$v.gender.required && $v.gender.$dirty" class="text-danger">Select Mode</span>
    </div>
  

<form @click.prevent="submitForm"> 
<!-- NAME -->
   
   
 <!-- EMAIL -->
 <div class="form-group">
   <label class="text-danger tit">email:</label>
    <input placeholder="e.g fabregas4@pp.com" class="form-control" type="email" v-model="email">
    
    <span  v-if="!$v.email.required && $v.email.$dirty" class="text-danger">email is required</span>
    <span class="text-danger" v-if="!$v.email.email  && $v.email.$dirty">Use a valid email </span>
 </div>
  
  <!-- PASSWORD -->
  <div class="form-group">
   <label class="text-danger tit">password:</label>
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
  name:'adminLogin',

  data(){
    return{
name:'',
email:'',
password:'',
gender:'',
acceptTerms:''
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
      gender:{
        required
      },
      acceptTerms:{
        required
      }
    },
    created(){
    localStorage.setItem('password',1234)
      localStorage.setItem('name','Degood')
        localStorage.setItem('email','degood@food.com')

},
    methods:{
confirmation(){
    console.log(this.password)
    console.log(this.email)
if (
    this.password=='1234' && this.email=='degood@food.com'
)
    {
        document.getElementById('warning').innerHTML=''
    
 this.$router.push('/admin')
 
}

else{
    document.getElementById('warning').innerHTML='Please go back to the customer Menu'
      }

},


      submitForm(){
this.$v.$touch()
if (!this.$v.$invalid) {

  console.log(`Name: ${this.name} 
  Email:${this.email}
  Gender:${this.gender}
   Password:${this.password} 
  AcceptTerms:${this.acceptTerms}
   `)
  
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