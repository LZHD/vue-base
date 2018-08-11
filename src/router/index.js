import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/layout'
import AgGrid from '@/components/AgGrid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout
    },
    {
      path: '/AgGrid',
      name: 'AgGrid',
      component: AgGrid
    }
  ]
})
