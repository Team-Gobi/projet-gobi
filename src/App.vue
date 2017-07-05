<template>
<md-layout md-flex-medium="100" md-align="center" md-gutter>
  <div id="app">
  <md-toolbar class="md-large" md-theme="white">
      <img src="./assets/logo-gobi-sobre.png">
  </md-toolbar>
    <router-view></router-view>
  </div>
</md-layout>
</template>

<script>

export default {
    name: 'app'
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
