import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/views/index')
    },
    {
      path: '/det',
      name: 'Detect',
      component: () => import('@/views/detect')
    },
    {
      path: '/rec',
      name: 'Recognize',
      component: () => import('@/views/recognize')
    }
  ]
})
