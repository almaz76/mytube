<template>
  <div id="app">
    <h1> Mytube Search </h1>
    <searchBar/>
  </div>
</template>

<script>
import searchBar from './components/searchBar.vue'

export default {
  name: 'App',
  components: {
    searchBar
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
