<template>
    <div>
  <header>

    <div class="wrapper">
        
    <div>
 
     <a href="index.html"><h1>Madina<span class="orange">Tic</span></h1></a>
         
    <nav>
        <ul>
            <li> <a href="/">Accueil</a>  </li>
            <li> <a href="#steps">About Us</a></li>
            <li><a href="#possibility">services</a></li>
            <li><a href="contactus" >Contact Us</a></li>
            <li><a href="signin">Sign in</a></li>
           
        </ul>  
        
    </nav>
        </div>
   </div>     

</header>
    
    <section id="signIn">
     <div id='#app2'>   
	<div class="loginbox">
		<!--<img src="2.png"  class="avatar">-->
		<h1>Sign In</h1>
		<form>
			<p>Email</p>
			<input type="text"  V-model="email" placeholder="Enter your Email">
            
			<p>password </p>
			<input type="password" V-model="password" placeholder="Enter your password ">
			<input type="submit"  value="login " @click="login" >
            
			<center><a href="password.html">Forget your password?</a><br>
             
			<button  id="signUp" ><a href="signup">SIGN UP</a></button> 
           
                </center>
		</form>
                  
	</div>
	</div>


        </section>
    <section id="annonce2">
        <!--........................-->
    </section>
    
      <footer>
             <h1>Madina<span class="orange">Tic</span></h1>
            <div class="copyright" >Copyright © 2020. All rights reserved.</div>
            
        </footer>
    
    
    </div>
</template>

<script>
const fetch = require('node-fetch');
export default {
  name: 'signin',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    login() {
      let user = {
        email: this.email,
        password: this.password
      }    
      fetch('http://localhost:5000/api/login', {
   method:'post',
   body:JSON.stringify(user),
   headers: {
                'Content-Type': 'application/json',
                Accept:"application/json",
            }
  
  })

  .then((res) => res.json())
        .then(res => {
          //if successfull
           {
            localStorage.setItem('token', res.data.token);
          }
        })
        .catch((err)=>console.log(err))
        }
    }
  }

</script>