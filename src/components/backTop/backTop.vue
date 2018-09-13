<template>
  <BackTop :height="places.height" :right="places.right" :bottom="places.bottom">
    <div class="backTop"></div>
  </BackTop>
</template>

<script>
  export default {
    name: "back-top",
    props: {
      places: {
        type: Object,
        default () {
          return {
            height: '200',
            right: '150',
            bottom: '100'
          }
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .backTop {
    width: 28px;
    height: 48px;
    line-height: 48px;
    background: url(../../assets/img/backTop.png);
    &:hover {
       background: url(../../assets/img/backTop_hover.png);
       opacity: .4;
       transition: .8s;
     }
  }
</style>
