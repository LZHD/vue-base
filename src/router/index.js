import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/layout'
import iView from 'iview'

Vue.use(Router)

const router = new Router({
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

// 页面加载进度条开始
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

// 页面加载进度条结束
router.afterEach((to) => {
  iView.LoadingBar.finish()
})

export default router
