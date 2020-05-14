<template>
    <div>
        <header>

    <div class="wrapper">
        
    <div>
 
    <a href="index.html"> <h1>Madina<span class="orange">Tic</span></h1></a>
         
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
    
            
        <section id="contact">
            <div class="wrapper">
            <h3>Contact Us</h3>
                
            <form>
                    

               <div class="nom">
                <input type="name" id="name" placeholder="your name" v-model="name">
                   </div>
                <br>
                <br>
                <br>
                <input  type="Email"  placeholder ="Your Email " v-model="email" required><br><span v-if="msg.email"><h4>{{msg.email}}</h4></span>   
                
               
                <br>
                <br>
                
        
        <label for="message"></label>
               
       <textarea  cols="30" rows="8"  v-model="message" required></textarea><br><span v-if="msg.message"><h4>{{msg.message}}</h4></span>   
             
                <br>
               
                <input type="submit" value="Send" class="button3"  v-on:click="envoyer">
                                  
       
                
                </form>
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
export default {
    name: 'Test',
    data(){

    return{
        message1:'enter your message',
        email: '',
        msg: [],
        message:''
    }
    },
    watch: {
    email(value){
      // binding this to the data value in the email input
      this.email = value;
      this.validateEmail(value);
    },
    message(value){
      // binding this to the data value in the email input
      this.message = value;
      this.checkMessage(value);
    }
    },
    

  methods: {
        validateEmail(value){
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value))
  {
    this.msg['email'] = '';
  } else{
    this.msg['email'] = 'Invalid Email Address';
  } 
    },

    checkMessage(value){
        let difference = 20 - value.length;
      if (value.length<20) {
        this.msg['message'] = 'Min must be 20 characters! '+ difference + ' characters left' ;
      } else {
         this.msg['message'] = '';
      }
      if (value.length>200){ this.msg['message'] = 'Max must be 200 characters! ';}
       },
    
        
    comment()
    {
    this.message='';
    },
  envoyer()
      { 
      alert(' votre message a été envoyé');
          console.log('message envoyé!');
      },
}
 }

</script>