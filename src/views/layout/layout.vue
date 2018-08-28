<template>
  <Layout class="app-layout">
    <Sider hide-trigger collapsible v-model="collapsed" :style="{overflow: 'hidden'}">
      <side-bar :collapsed="collapsed"></side-bar>
    </Sider>

    <Layout>
      <Header class="header">
        <header-bar @on-tigger="onTigger" :collapsed="collapsed"></header-bar>
      </Header>
      <Content class="main-content">
        <Layout>
          <app-main></app-main>
        </Layout>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import sideBar from './components/sideBar/sideBar'
import headerBar from './components/headerBar/headerBar'
import appMain from './components/appMain'

export default {
  name: 'layout',
  data () {
    return {
      collapsed: false
    }
  },
  components: {
    sideBar,
    headerBar,
    appMain
  },
  methods: {
    onTigger (status) {
      this.collapsed = status
    }
  }
}
</script>

<style rel="scss" scoped>
  .app-layout {
    width: 100%;
    height: 100%;
  }

  .main-content {
    height: calc(100% - 64px);
    padding: 10px 15px;
    overflow: auto;
  }

  .header {
    background: #fff;
    padding: 0 15px;
    width: 100%;
  }
</style>
