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
  <div class="container cards_display">
    <CardsList />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CardsList from "@/components/Cards/CardsList.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    CardsList,
  },
};
</script>

<style>
.heart {
  position: relative;
  top: -47px;
  right: 0px;
  float: right;
  height: 20%;
  width: 19%;
  transform: scaleX(-1);
}

.heartsmall {
  position: relative;
  top: -47px;
  right: -50px;
  float: right;
  height: 10%;
  width: 10%;
}

.cardiomessage {
  height: 15%;
  width: 75%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
}

.cards_display {
  position: absolute;

  bottom: 0px;
  /* left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  width: 100px; */
}
</style>
