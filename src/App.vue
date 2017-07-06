<template>
<div id="app"> 


      <!-- <img src="./assets/logo-gobi-sobre.png"> -->

  <md-toolbar class="md-toolbar-container">
    <h2 class="md-title" style="flex: 1">GOBI</h2>
    <md-button class="md-icon-button">
      <a href="./"><md-icon class="md-size-1x md-accent">home</md-icon></a>
    </md-button>
  </md-toolbar>

  <router-view></router-view>

  </div>
</template>

<script>

export default {
    name: 'app'
};
</script>

<style>
</style>
