<template>
  <div id="app">
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: 'App',
  created() {
    this.getArticle();
  },
  methods: {
    async getArticle() {
      const { data } = await axios.get("http://localhost:3000/read");
      console.log(data);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
