// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'ag-grid/dist/styles/ag-grid.css'
import 'ag-grid/dist/styles/ag-theme-balham.css'
import 'ag-grid/dist/styles/ag-theme-balham-dark.css'
import 'ag-grid/dist/styles/ag-theme-blue.css'
import 'ag-grid/dist/styles/ag-theme-fresh.css'
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
  router,
  render: h => h(App)
}).$mount('#app')
