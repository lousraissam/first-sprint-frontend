<template>
    <div>
         <header>
    

    <div class="wrapper">
        
    <div id="logo">
 
     <a href="index.html"><h1>Madina<span class="orange">Tic</span></h1></a>
         
    <nav>
        <ul>
            <li> <a href="/">Accueil</a>  </li>
            <li> <a href="#steps">About Us</a></li>
            <li><a href="#possibility">services</a></li>
            <li><a href="contactus" >Contact Us</a></li>
            <li><a href="signin" >Sign in</a></li>
           
        </ul>  
        
    </nav>
        </div>
   </div>     

</header>
<section id="signup">

    <div class="loginbo" id='#app4'> 
     <!-- <img src=2.png  class="avatar"> -->
        <form  method='post'> 
          <h1>Sign Up</h1>
          
         
            <p>Name</p>
            <input  type="text" placeholder="Your full name" v-model="name" required/>
            <p>Email</p>
            <input  type="email"  placeholder="Your Email"  v-model="email" required> <br>
             <span v-if="msg.email"><h4>{{msg.email}} </h4></span>
            <p>Password</p>
            <input type="password" v-model ="password" required placeholder="Your password" > <br>
      <span v-if="msg.password"><h4>{{msg.password}}</h4></span>        
           
            <p>Confirm Password</p>
            <input type="password" v-model ="password1" placeholder="Confirm Your password "> 
            <br>
              <span v-if="msg.password1"><h4>{{msg.password1}}</h4></span>              
              <input type="submit" value="Register" @click="signup" />
               
        </form>
        <div>
        {{ error }}
        </div>
    </div>
    </section>
    <section id="annonce2">

    </section>

    <footer>
      <h1>Madina<span class="orange">Tic</span></h1>
     <div class="copyright" >Copyright © 2020. All rights reserved.</div>
     
 </footer>
    </div>
</template>
<script>

import axios from 'axios';
export default {
  name: 'Test',
  data(){
    return {
      name: '',
      email: '',
      password: '',
      password1: '',
      msg: [],
      error: '',
    }
  },
  watch: {
    email(value){
      // binding this to the data value in the email input
      this.email = value;
      this.validateEmail(value);
    },
    password(value){
      this.password = value;
      this.validatePassword(value);
    },
    password1(value){
      this.password1 = value;
      this.samePassword(value);
    },
  },
  methods:{
    signup()  
    {
      let newUser = {
        name: this.name,
        email: this.email,
        password: this.password,
       }
       
 axios.post('http://localhost:5000/api/register', newUser ,{headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      
      
      }})

       .then((res) => {
      console.log("RESPONSE RECEIVED: ", res);
      this.$router.push('/signin');
    })
    .catch((err) => {
      console.log(err.response);
    })
  },
    validateEmail(value){
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value))
  {
    this.msg['email'] = '';
  } else{
    this.msg['email'] = 'Invalid Email Address';
  } 
    },
    validatePassword(value){
      let difference = 8 - value.length;
      if (value.length<8) {
        this.msg['password'] = 'Must be 8 characters! '+ difference + ' characters left' ;
      } else {
         this.msg['password'] = '';
      }
    },
    samePassword(){
      if (this.password == this.password1 )
      {
         this.msg['password1'] = '';
      }
      else {
        this.msg['password1']='wrong confirmation password';
        
      }
    },
    
  
  }
 

}

 
</script>