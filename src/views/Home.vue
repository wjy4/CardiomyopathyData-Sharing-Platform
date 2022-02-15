<template>
  <div class="home">
    <div class="cardiomessage">
      <HelloWorld msg="cardio" />
    </div>
    <img class="heart" alt="Cardiac" src="../assets/CardianTransparent2.png" />
    <img
      class="heartsmall"
      alt="Cardiac"
      src="../assets/CardianTransparent2.png"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style>
.heart {
  position: relative;
  top: -47px;
  right: -45px;
  float: right;
  height: 25%;
  width: 25%;
  transform: scaleX(-1);
}

.heartsmall {
  position: relative;
  top: -47px;
  right: -185px;
  float: right;
  height: 15%;
  width: 15%;
}

.cardiomessage {
  height: 75%;
  width: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
}
</style>
