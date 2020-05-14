<template>
    <div>
        
        <header>

    <div class="wrapper">
        
    <div>
 
    <a href="index"> <h1>Madina<span class="orange">Tic</span></h1></a>
         
    <nav>
        <ul>
            <li> <a href="index">Accueil</a>  </li>
            <li> <a href="#steps">About Us</a></li>
            <li><a href="#possibility">services</a></li>
            <li><a href="contactus" >Contact Us</a></li>
            <li><a href=signin >Sign in</a></li>
           
        </ul>  
        
    </nav>
        </div>
   </div>     

</header>
    
            
    <section id="contact">
            
            <h3>Forget Password </h3>
                <p></p>
                <div class="nom" id="#app12">  
            <form action="send.html" method="post" @submit="valid">
                <div class="errors-list">
                    <div class="error" ></div>
                  </div>
                 <br><br><br>
                <input  type="Email" id="email" class="form-control"   placeholder ="Your Email " v-model="mail" > 
                <br><br><br>
                <input type="submit" value="Reset Password" class="button3" >
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