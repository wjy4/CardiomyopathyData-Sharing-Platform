<template>
  <div class="row">
    <div class="col">
      <div class="card-group">
        <div class="container-fluid">
          <div class="row">
            <CardItem />
            <CardItem />
            <CardItem />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardItem from "./CardItem.vue";
export default {
  name: "CardsList",
  components: {
    CardItem,
  },
};
</script>
<style></style>
