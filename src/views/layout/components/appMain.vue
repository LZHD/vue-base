<template>
  <section class="app-main">
    <router-view :key="key"></router-view>
  </section>
</template>

<script>
export default {
  name: 'app-main',
  computed: {
    key () {
      return this.$route.fullPath
    }
  }
}
</script>

<style scoped>
  .app-main {
    position: relative;
  }
</style>
