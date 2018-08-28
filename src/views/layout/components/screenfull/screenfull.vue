<template>
  <div class="screen-full" @click="change">
    <Tooltip :content="status ? '退出全屏' : '全屏'">
      <Icon @click="change" :type="status ? 'md-contract' : 'md-expand'" size="26"></Icon>
    </Tooltip>
  </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
  name: "screenfull",
  data () {
    return {
      status: {
        type: Boolean,
        default: false
      }
    }
  },
  methods: {
    change () {
      if (!screenfull.enabled) {
        this.$Message.warn('you browser can not work')
        return false
      }
      screenfull.toggle()
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.status = screenfull.isFullscreen
    })
  }
}
</script>

<style lang="scss" scoped>
  .screen-full, .ivu-tooltip-rel{
    height: 64px;
    width: 26px;
    line-height: 64px;
    float: right;
  }
</style>
