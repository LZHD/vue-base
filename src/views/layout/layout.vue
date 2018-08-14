<template>
  <div id="app-layout">
    <sidebar></sidebar>
    <div class="main-content">
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/sidebar/sidebar'
import appMain from './components/appMain'

export default {
  name: 'layout',
  components: {
    Sidebar,
    appMain
  }
}
</script>

<style rel="stylesheet/scss" scoped>
  #app-layout {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .main-content {
    min-height: 100%;
    transition: margin-left .28s;
    margin-left: 200px;
    position: relative;
  }
</style>
