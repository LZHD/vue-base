<template>
  <div id="app-layout">
    <sidebar></sidebar>
    <router-view :key="key"></router-view>
  </div>
</template>

<script>
import Sidebar from './components/sidebar/sidebar'

export default {
  name: 'layout',
  components: {
    Sidebar
  },
  computed: {
    key() {
      return this.$route.fullPath
    }
  }
}
</script>

<style rel="stylesheet/scss" scoped>
  #app-layout {
    width: 100%;
    height: 100%;
  }
</style>
