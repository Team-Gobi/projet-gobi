<template>

  <div id="app">
  
    <!-- <img src="./assets/logo-gobi-sobre.png"> -->
    <div class="phone-viewport complete-example">
      <md-toolbar class="md-toolbar-container md-medium">
        <md-button class="md-icon-button">
          <a href="./">
            <md-icon class="md-size-1x md-accent">home</md-icon>
          </a>
        </md-button>
        <md-icon>theaters</md-icon>
        <h2 class="md-title" style="flex: 1">GOBI</h2>
        
      </md-toolbar>
      <div class="home-slide">
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>

export default {
    name: 'app'
};
</script>

<style>
.body {
  font-family: "Roboto Mono",serif;
}
.complete-example {
  height: 100vh;
  display: flex;
  flex-flow: column;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.home-slide {
    flex: 1;
    overflow: auto;
  }
</style>
