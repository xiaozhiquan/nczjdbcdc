<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view  v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
