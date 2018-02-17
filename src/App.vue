<template>
  <div id="app">
    <headerComponent></headerComponent>
      <router-view/>
    <footerComponent></footerComponent>
  </div>
</template>

<script>
  import headerComponent from './components/header.vue'
  import footerComponent from './components/footer.vue'
  export default {
    name: 'App',
    components: {
      headerComponent,
      footerComponent
    },
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
