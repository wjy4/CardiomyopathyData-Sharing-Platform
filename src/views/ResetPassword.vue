<template>
  <div class="emailcontainer">
    <h2>Forgotten Password?</h2>
      <input type = "text" class = "textbox" placeholder="Email" v-model="email"/>
      <input @click="isShowing = true" value="Send">
      <h1 v-show="isShowing"> Email has been sent to you, Please check your emails and verfity. </h1>  
    <p> Need an account ? </p>
  </div>
</template>

<script>
import {ref} from 'vue';
import { useRoute } from "vue-router";
import firebase from 'firebase';
export default {
  setup() 
  {
    const email = ref("");
    const route = useRoute(); 

    function resetPassword(){
      firebase
        .auth()
        .sendPasswordResetEmail(email.value)
        .catch(err =>alert(err.message));
    }

    return { route, email, resetPassword };
  },
  data() {
    return {
      isShowing:false,
    }
  }
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
