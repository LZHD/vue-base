<template>
  <Submenu :name="parentItem">
    <template slot="title">
      <span>{{parentItem.name}}</span>
    </template>
    <template v-for="item in parentItem.children">
      <template v-if="item.children && item.children.length === 1">
        <side-item v-if="item.name" :key="`menu-${item.name}`" :parent-item="item"></side-item>
        <menu-item v-else :name="getNameOrHref(item, true)" :key="`menu-${item.children[0].name}`"><common-icon :type="item.children[0].icon || ''"/><span>{{ item.children[0].name }}</span></menu-item>
      </template>
      <template v-else>
        <side-item v-if="item.name" :key="`menu-${item.name}`" :parent-item="item"></side-item>
        <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`"><common-icon :type="item.icon || ''"/><span>{{ item.name }}</span></menu-item>
      </template>
    </template>
  </Submenu>
</template>

<script>
  export default {
    name: "side-item",
    props: {
      parentItem: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>

<style scoped>

</style>
