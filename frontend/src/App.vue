<script setup lang="ts">
import ThemeComponent from './components/misc/ThemeComponent.vue';
import ConnectionStatusComponent from './components/misc/ConnectionStatusComponent.vue';
import MenuModule from './components/shared/MenuModule.vue';
</script>

<template>
  <ConnectionStatusComponent />
  <MenuModule />
  <div class="grid" id="mainGrid">
    <div id="leftSide" class="col-10 col-offset-1 lg:col-3 lg:col-offset-0"></div>
    <div class="col-10 col-offset-1 lg:col-6  lg:col-offset-0"> <RouterView /> </div>
    <div id='rightSide' class="col-10 col-offset-1 lg:col-3 lg:col-offset-0"></div>
  </div>
  <ThemeComponent />
</template>

<style>
@import 'shepherd.js/dist/css/shepherd.css';
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  padding: 0px;
  margin: 0px;
}
#mainGrid{
  margin: 0 !important;
}
a{
  text-decoration:none;
}
a:visited { color: LinkText; }
</style>