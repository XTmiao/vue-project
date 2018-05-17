import Vue from 'vue'
import Router from 'vue-router'

import IndexView from '../components/index'
import AboutUs from '../components/aboutus'
import ChangeWai from '../components/change/wai'
import ChangeOil from '../components/change/oil'
import ChangeMetal from '../components/change/metal'
import ChangeView from '../components/change'
import ChangeFutures from '../components/change/futures'
import ChangeStock from '../components/change/stock'

import ChangeAccount from '../components/change/account'
import ChangeFlow from '../components/change/flow'
import ChangeLever from '../components/change/lever'

import AccountView from '../components/account'

import PlatformView from '../components/platform'
import PlatformPc from '../components/change/pc'
import PlatformMobile from '../components/change/mobile'
import PlatformTablet from '../components/change/tablet'

import EducView from '../components/educ'
import EducSrc from '../components/change/src'
import EducStrategy from '../components/change/strategy'

import CustomerView from '../components/customer'
import CustomerContact from '../components/change/contact'
import CustomerFAQ from '../components/change/FAQ'
import CustomerOpinion from '../components/change/opinion'

Vue.use(Router)

export default new Router({
	mode:'history',
  	routes: [
    	{
      		path: '/',
     		component: IndexView
    	},
    	{
    		path:'/about',
    		component: AboutUs
    	},
    	/*{
    		path:'/change/wai',
    		component:ChangeWai
    	},
      {
        path:'/change/oil',
        component:ChangeOil
      },{
        path: '/change/metal',
        component: ChangeMetal
      }*/
      {
        path: '/change',
        component: ChangeView,
        children: [
          {
            path: 'wai',
            component: ChangeWai
          },
          {
            path: 'metal',
            component: ChangeMetal
          },
          {
            path: 'oil',
            component: ChangeOil
          },
          {
            path: 'futures',
            component: ChangeFutures
          },
          {
            path: 'stock',
            component: ChangeStock
          },
          
        ]
      },
      {
        path: '/account',
        component: AccountView,
        children: [
          {
            path: 'account',
            component: ChangeAccount
          },
          {
            path: 'flow',
            component: ChangeFlow
          },
          {
            path: 'lever',
            component: ChangeLever
          }
        ]
      },
      {
        path: '/platform',
        component: PlatformView,
        children: [
          {
            path: 'pc',
            component: PlatformPc
          },
          {
            path: 'mobile',
            component: PlatformMobile
          },
          {
            path: 'tablet',
            component: PlatformTablet
          }
        ]
      },
      {
        path: '/educ',
        component: EducView,
        children: [
          {
            path: 'strategy',
            component: EducStrategy
          },
          {
            path: 'src',
            component: EducSrc
          }
        ]
      },
      {
        path: '/customer',
        component: CustomerView,
        children: [
          {
            path: 'contact',
            component: CustomerContact
          },
          {
            path: 'FAQ',
            component: CustomerFAQ
          },
          {
            path: 'opinion',
            component: CustomerOpinion
          }
        ]
      }
  ]
})
