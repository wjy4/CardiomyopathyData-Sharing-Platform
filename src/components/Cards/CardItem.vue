<template>
  <div class="card">
    <a :href="url" target="_blank">
      <img class="card-img-top" :src="image" alt="Card image cap"
    /></a>
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "image", "description", "url"],
};
</script>
<style>
.card {
  width: 85%;
}
</style>
