import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: layout,
      redirect: 'dashboard',
      children: [{
        path: 'dashboard',
        component: () => import('@/views/dashboard/dashboard'),
        name: 'dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
      }]
    },
    {
      path: '/examples',
      component: layout,
      redirect: '/examples/button',
      children: [{
        path: 'button',
        component: () => import('@/views/examples/button')
      }, {
        path: 'agGrid',
        component: () => import('@/views/examples/agGrid')
      }]
    }
  ]
})
