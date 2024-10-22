<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<HelloWorld  msg="Welcome to Your Vue.js App" />-->
    <FirstComp/>
    <FirstComp/>
  </div>
</template>

<script>
import FirstComp from './components/FirstComp.vue'
//import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld
    FirstComp
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
