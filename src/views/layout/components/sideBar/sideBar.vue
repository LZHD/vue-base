<template>
  <div class="side-item-content">
    <router-link to="/">
      <div :class="[collapsed ? 'headImgx' : 'headImg']" >
        <img src="../../../../assets/logo.png" alt="">
      </div>
    </router-link>
    <div class="side-item">
      <Menu v-show="!collapsed"
        :active-name="activeName"
        :open-names="openNames"
        :accordion="accordion"
        :theme="theme"
        width="auto">
        <template v-for="item in menuList">
          <template v-if="item.children && item.children.length === 1">
            <side-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-item>
            <menu-item v-else :name="getNameOrHref(item, true)" :key="`menu-${item.children[0].name}`"><common-icon :type="item.children[0].icon || ''"/><span>{{ showTitle(item.children[0]) }}</span></menu-item>
          </template>
          <template v-else>
            <side-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-item>
            <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`"><common-icon :type="item.icon || ''"/><span>{{ showTitle(item) }}</span></menu-item>
          </template>
        </template>
      </Menu>
    </div>
  </div>
</template>

<script>
  import sideItem from './sideItem'
export default {
  name: 'sideBar',
  components: {
    sideItem
  },
  props: {
    collapsed: {
      type: Boolean
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .side-item-content {
    width: 100%;
    height: 100%;
    overflow: hidden;
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

    .side-item {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      overflow-y: auto;
      margin-right: -18px;
      height: calc(100% - 64px);
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
</style>
