<template>
    <div class="emailcontainer">
      <h2>Forgotten Password?</h2>
       <input type = "text" class = "textbox" placeholder="Email" v-model="email"/>
        <input type = "submit" class = "li" value="Send">
    <p> Need an account ? </p>
  </div>
</template>

<script>
import {ref} from 'vue';
import { useRoute } from "vue-router"; // <=== 2.
import firebase from 'firebase';
export default {
setup() {
    const user = "Emails send";
    const email = ref("");
    const route = useRoute(); 
    const Login = ()=>{
      firebase
        .auth()
        .sendPasswordResetEmail(email.value)
        .then(function() {
         window.alert("Email has been sent to you, Please check and verfity. ");
        })
        .catch(err =>alert(err.message));
    }
   

    return { route, email, Login, user };
  },
}
</script>

<style>
h2{
     margin-top: 50px;
     font-size: 30px;
}
.textbox{
    width: 100%;
    height:40px;
    font-size:14pt;
    

}
.li{
    margin-top: 20px;
     font-size:14pt;
}
div.emailcontainer{
  background-color: lightgrey;
  width: 280px;
  border: 15px solid white;
  padding: 80px;
  margin: auto;
  height: 500px;
}
</style>