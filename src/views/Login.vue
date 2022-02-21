<template>
  <h1>Login</h1>
  <div>
    <el-form :model="form" @submit.prevent="submit">
      <el-form-item label="Email">
        <el-input
          id="email"
          type="email"
          class="form-control"
          name="email"
          value
          required
          autofocus
          v-model="form.email"
        />
      </el-form-item>
      <el-form-item label="Password">
        <el-input
          id="password"
          type="password"
          class="form-control"
          name="password"
          required
          v-model="form.password"
        />
      </el-form-item>
      <div>
        <div>
          <el-button type="primary" @click="submit">Login</el-button>
        </div>
      </div>
    </el-form>
    <div class="login">
     <p> Forgot your Password ?
     <router-link to="/RestPassword">Rest Password</router-link> </p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import {reactive} from "vue";

export default {
  setup() {
    const form = reactive({
      email: '',
      password: ''
    });

    function submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(form.email, form.password)
        .then(() => {
          //some stuff for after login
        })
        .catch((err) => {
          console.log("error: " + err);
        });
        const user = firebase.auth().currentUser;

        if(user){
            console.log("logged in");
        }else{
            console.log("not logged in")
        }
    }
  
  return {form, submit};
  },
};
</script>