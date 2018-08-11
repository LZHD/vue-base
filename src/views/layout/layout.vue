<template>
  <div id="app-layout">
    <sidebar></sidebar>
  </div>
</template>

<script>
import Sidebar from "./components/sidebar/sidebar";

export default {
  name: 'layout',
  components: {
    Sidebar
  }
}
</script>

<style rel="stylesheet/scss" scoped>
  #app-layout {
    width: 100%;
    height: 100%;
  }
</style>
