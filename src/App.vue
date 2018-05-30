<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <headerNav/>
    <sideBar/>
      <router-view/>
  </div>
</template>

<script>
import headerNav from './components/headerNav.vue'
import sideBar from './components/sideBar.vue'
export default {
  name: 'App',
  components:{
    headerNav,
    sideBar
  }
}
</script>

<style>
</style>
