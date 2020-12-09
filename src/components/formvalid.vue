<template>

<div>
    
<h2 style="text-decoration:underline; cursor:pointer;"> Vuelidate form</h2>
  <!-- <input type="checkbox" > -->
  <div class="form-check">

<label style="font-size:25px;" class="form-check-label">Accept Terms</label>
<input type="checkbox" value="YES" v-model="acceptTerms" class="form-control">
<span  v-if="!$v.acceptTerms.required && $v.acceptTerms.$dirty" class="text-danger">Acceping Terms in required</span>
  
</div>
<br>




<form @click.prevent="submitForm"> 
<!-- NAME -->
   <div class="form-group">
   <label>Name:</label>
    <input class="form-control" v-model="name">
    
    <span v-if="!$v.name.required && $v.name.$dirty" class="text-danger">Name is required</span>
    <span class="text-danger" v-if="!$v.name.alpha && $v.name.$dirty">Alphabetic chracters only</span>
   </div>
  
 <!-- EMAIL -->
 <div class="form-group">
   <label>email:</label>
    <input class="form-control" type="email" v-model="email">
    
    <span v-if="!$v.email.required && $v.email.$dirty" class="text-danger">email is required</span>
    <span class="text-danger" v-if="!$v.email.email  && $v.email.$dirty">Use a valid email </span>
 </div>
  
  <!-- PASSWORD -->
  <div class="form-group">
   <label>password:</label>
    <input class="form-control" v-model="password">
    
    <span  v-if="!$v.password.required && $v.password.$dirty" class="text-danger">password is required  </span>
    <span  v-if="(!$v.password.minLength || !$v.password.maxLength  ) && $v.password.$dirty" class="text-danger">password must be between 4 to 12 characters </span>
    <!-- <span  class="text-danger" v-if=" !$v.password.maxLength  && $v.password.$dirty">PAssword must be between {{$v.$params.password.minLenghth.min}}&& {{$v.$params.password.maxnghth.max}} characters</span> -->
    </div>
    <!-- <span class="text-danger" v-if="(!$v.password.maxLength ) && $v.password.$dirty">PAssword is long</span> -->
  <!-- GENDER -->
  <div class="form-group">
  <label>Gender</label>
    <select  class="form-control" v-model="gender">
      <option value="male">male</option>
      <option value="female">female</option>
      <option value="other">other</option>
    </select>
    <span v-if="!$v.gender.required && $v.gender.$dirty" class="text-danger">Gender is required</span>
    </div>
    <!-- <span v-if="(!$v.gender.gender || !$v.gender.required ) && $v.gender.$dirty">Use a valid gender </span> -->
  <!-- <div class="form-group">
   <label>Password</label>
    <input class="form-control" v-model="password">
    
    <span  v-if="$v.password.required && $v.password.$dirty" class="text-danger">password is required</span>
  
  </div> -->

<div class="form-check">
<input type="checkbox" value="YES" v-model="acceptTerms" class="form-control">
<label class="form-check-label">Accept Terms</label>
<span  v-if="!$v.acceptTerms.required && $v.acceptTerms.$dirty" class="text-danger">Acceping Terms in required</span>
  
</div>



   
 <input type="submit" class="btn btn-primary mt-2">

 </form>
</div>


</template>


<script>
import {minLength,maxLength,required,email,alpha} from 'vuelidate/lib/validators'
export default{
  name:'formValid',

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
    methods:{



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
  font-size: 25px;
}
/* @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"); */
</style>