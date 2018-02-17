import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }

  ]
})
