<template>
  <a @click="change" type="text" :class="['side-trigger', collapsed ? 'collapsed' : '']">
    <Icon :type="type" :size="size"></Icon>
  </a>
</template>

<script>
export default {
  name: 'side-tigger',
  data () {
    return {
      type: 'md-menu',
      size: 26
    }
  },
  props: {
    collapsed: {
      type: Boolean
    }
  },
  methods: {
    change () {
      this.$emit('on-change', !this.collapsed)
    }
  }
}
</script>

<style lang="scss" scoped>
  .side-trigger {
    width: 26px;
    height: 64px;
    line-height: 64px;
    display: inline-block;
  }

  .collapsed i {
    transform: rotateZ(90deg);
    -webkit-transition: transform .2s ease;
    -moz-transition: transform .2s ease;
    -o-transition: transform .2s ease;
    transition:transform .2s ease;
  }
</style>
