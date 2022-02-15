<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <p>{{articles}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getArticles }  from '../api/newsFeedApi';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      loading: false,
      articles: []
    }
  },
  created() {
    this.getDataFromApi()
  },
  methods: {
    async getDataFromApi() {
        this.loading = true;
        this.articles = await getArticles();
        this.loading = false;
    }
  }
}
</script>
