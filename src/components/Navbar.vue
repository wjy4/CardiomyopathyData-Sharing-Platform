<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-end">
  <ul class="nav">
    <li class="nav-item">
      <router-link to="/" class="nav-link">Home</router-link>
    </li>

    <li class="nav-item">
      <router-link to="/help" class="nav-link">Help</router-link>
    </li>
    

    <template  v-if="isLoggedIn">
      <li v-if="isLoggedIn" class="nav-item">
        <router-link to="/account" class="nav-link">Account</router-link>
      </li>

      <li v-if="isLoggedIn" class="nav-item">
        <router-link to="/submitdata" class="nav-link">Submit data</router-link>
      </li>

      <li v-if="isLoggedIn" class="nav-item">
        <router-link to="/querydata" class="nav-link">Query data</router-link>
      </li>

      <li v-if="isLoggedIn" class="nav-item">
        <a href="#" class="nav-link" @click="logOut">Logout</a>
      </li>
    </template>

    <template v-else>
      <li class="nav-item">
        <router-link to="/login" class="nav-link">Login</router-link>
      </li>
    </template>
  </ul>
</nav>
</template>

<script>
import firebase from "firebase";
import router from "../router/index";

export default {
  props: {
    'isLoggedIn': Boolean
  },
  setup(){

    function logOut(){
      firebase.auth().signOut();
      router.push({path: "/"})
    }

    return {logOut}
  }
}
</script>
