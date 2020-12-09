<template>
  <div id="app" class="">
       <!-- <router-view> -->
    <!-- <div id="nav">
      <h3 >Let's go Somewhere</h3><hr>
     
        
     <router-link to="/" event="mouseover">Home</router-link> |
      <router-link to="/About/10">About 10</router-link>|
          <router-link to="/About/12">About 12</router-link>|
      <router-link v-bind:to="{path:'/Contact'}" tag="button" active-class="-active" >Contact</router-link><hr>
       -->
       <header class="top-navbar">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container">
				<a class="navbar-brand" href="#">
					<img src="./live-dinner/images/logo.png" alt="">
				</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbars-rs-food">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item active">
              <router-link to="/" class="nav-link">Home</router-link></li>
						<li class="nav-item"><router-link to="/form" class="nav-link" href="#">LOGIN</router-link></li>
						<li class="nav-item"><router-link to="/sup" class="nav-link" href="#">SIGN UP</router-link></li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">Pages</a>
							<div class="dropdown-menu" aria-labelledby="dropdown-a">
								<a class="dropdown-item" href="#">Reservation</a>
								<a class="dropdown-item" href="#">Stuff</a>
								<a class="dropdown-item" href="#">Gallery</a>
							</div>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">Blog</a>
							<div class="dropdown-menu" aria-labelledby="dropdown-a">
								<a class="dropdown-item" href="#">blog</a>
								<a class="dropdown-item" href="#">blog Single</a>
							</div>
						</li>
						<li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
  <!-- <div class=" container text-red name">margin-left: 15px;margin-left: 15px;margin-left: 15px;margin-left: 15px;margin-left: 15px;margin-left: 15px;margin-left: 15px;margin-left: 15px;margin-left: 15px;margin-left: 15px;margin-left: 15px;margin-left: 15px;margin-left: 15px;margin-left: 15px;margin-left: 15px;margin-left: 15px;margin-left: 15px;margin-left: 15px;margin-left: 15px;margin-left: 15px;margin-left: 15px;a</div> -->
  
	
	
 
    
<router-view class="container-fluid bg-white disp "></router-view>
      
  </div>
</template>
<script>
// import formValid from  './components/formvalid.vue'
export default{
  
name:'App',
components:{
  // formValid
},
data(){
  return{
      }
},
methods:{
 
}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-left: -10px; */
}



#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.-active{
  background-color:red
}
.disp{
  /* height: 60px; */
  /* width: 100%; */
  /* background-color:green; */
  margin-left: auto;
  padding-top: 180px;
  opacity:.9;
  border-radius: 15px;
  height: 820px;
  width: 90%;
  color: white;
  /* margin-top: 20px; */
}
.name{
  color:red;
  margin-left: 15px;
  padding-top: 120px;
  background-color: slategray;
  opacity: .9;
}
</style>
