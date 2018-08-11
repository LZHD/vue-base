// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../node_modules/ag-grid/dist/styles/ag-grid.css'
import '../node_modules/ag-grid/dist/styles/ag-theme-balham.css'
import 'iview/dist/styles/iview.css'

import '@/assets/css/index.scss'

import Vue from 'vue'
import App from './App'
import router from './router'

import 'ag-grid-enterprise'
import iView from 'iview'

Vue.config.productionTip = false
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App)
})
