<template>
  <router-link to="/">
    <div :class="[collapsed ? 'headImgx' : 'headImg']" >
      <img src="../../../../assets/logo.png" alt="">
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'sideBar',
  props: {
    collapsed: {
      type: Boolean
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .headImg {
    width: 100%;
    height: 64px;
    text-align: center;
    padding-top: 8px;
    img {
      width: 60px;
     }
  }

  .headImgx {
    width: 100%;
    height: 40px;
    text-align: center;
    padding-top: 10px;
    img {
      width: 30px;
    }
  }
</style>
