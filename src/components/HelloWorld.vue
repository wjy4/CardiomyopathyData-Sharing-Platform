<template>
  <div class="hello">
    <h1>Cardiomyopathy Data Sharing Platform</h1>
    <p>
      Cardiomyopathy is a disease of the heart muscle that makes it harder for
      your heart to pump blood to the rest of your body. This platform allows
      the user to submit and keep track of their own data once they’ve
      registered to the website. The user can then view useful information
      relating to cardiomyopathies in varius ways such as graphs and plots for
      easier consumption and interpretation.
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 74%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

h1 {
  text-decoration: underline;
}
</style>
