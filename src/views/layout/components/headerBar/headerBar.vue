<template>
  <div id="header">
    <side-tigger @on-change="sideTigger" :collapsed="collapsed"></side-tigger>
    <screenfull></screenfull>
  </div>
</template>

<script>
  import screenfull from '../screenfull/screenfull'
  import sideTigger from '../sideTigger/sideTigger'
  export default {
    name: "headerBar",
    components: {
      screenfull,
      sideTigger
    },
    props: {
      collapsed: {
        type: Boolean
      }
    },
    methods: {
      sideTigger (status) {
        this.$emit('on-tigger', status)
      }
    }
  }
</script>

<style scoped>
  #header {
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>
