import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index'
import Sort from 'components/sort/sort'
import Cart from 'components/cart/cart'
import My from 'components/my/my'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
    	path: '/sort',
    	component: Sort
    },
    {
    	path: '/cart',
    	component: Cart
    },
    {
    	path: '/my',
    	component: My
    }
  ]
})
