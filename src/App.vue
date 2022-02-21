<template>
  <Navbar/>
  <router-view />
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  setup() {
    
  },
  components: {
    Navbar
  }
}
</script>

<style>
  .container:first-of-type {
    margin-top: 30px;
  }
</style>
