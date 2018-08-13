import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: layout,
      redirect: 'examples',
      children: [{
        path: 'examples',
        component: () => import('@/views/examples/button')
      }]
    }
  ]
})
