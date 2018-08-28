import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: layout,
      redirect: 'dashboard',
      children: [{
        path: 'dashboard',
        component: () => import('@/views/dashboard/dashboard')
      }]
    },
    {
      path: '/examples',
      component: layout,
      name: 'examples',
      children: [{
        path: 'button',
        name: 'button',
        component: () => import('@/views/examples/button.vue')
      }, {
        path: 'grid',
        name: 'grid',
        component: () => import('@/views/examples/grid.vue')
      }]
    }
  ]
})
