import Vue from 'vue'
import Router from 'vue-router'

import Nav1 from '@/views/products/Nav1'
import Nav2 from '@/components/Nav2'
import Nav3 from '@/components/Nav3'
import Nav4 from '@/components/Nav4'
import centent from '@/components/nav2/Centent_nav'
import centent1 from '@/components/nav2/Centent_nav1'
import centent2 from '@/components/nav2/Centent_nav2'
import Qiandao from '@/components/nav1/qiandao'
import Liquan from '@/components/nav1/liquan'
import Kanjia from '@/components/nav1/kanjia'
import Zhuanlan from '@/components/nav1/zhuanlan'
import Zhuanti from '@/components/nav1/zhuanti'
import Zhuc from '@/components/nav4/zhuc'
import Zhuche from '@/components/nav4/zhuche'
import Bargain from '@/components/nav1/Bargain'
import region from '@/components/nav4/region'
import Order from '@/components/nav3/Order'
import address from '@/components/nav3/address'
import address1 from '@/components/nav3/address1'
import Submission from '@/components/nav3/Submission'
import Orderdetails from '@/components/nav4/Orderdetails'
import OrderdetailsX from '@/components/nav4/OrderdetailsX'
import pinglun from '@/components/pinglun'

// import Options from '../index'
// import Options from '../../index'
// import vueg from 'vueg'
// import 'vueg/css/transition-min.css'
// Vue.use(vueg, Router, Options)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Nav1,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/nav1',
      component: Nav1,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/nav2',
      component: Nav2,
      meta: {
        title: '分类'
      }
    },
    {
      path: '/nav3',
      component: Nav3
    },
    {
      path: '/nav4',
      component: Nav4
    },
    {
      path: '/user/:id?',
      component: centent
    },
    {
      path: '/user1/',
      component: centent1
    },
    {
      path: '/user2/',
      component: centent2
    },
    {
      path: '/liquan',
      component: Liquan
    },
    {
      path: '/qiandao',
      component: Qiandao
    },
    {
      path: '/kanjia',
      component: Kanjia
    },
    {
      path: '/zhuanlan',
      component: Zhuanlan
    },
    {
      path: '/zhuanti/:id?',
      component: Zhuanti
    },
    {
      path: '/zhuc',
      component: Zhuc
    },
    {
      path: '/zhuche',
      component: Zhuche
    },
    {
      path: '/Bargain/',
      component: Bargain
    },
    {
      path: '/region',
      component: region
    },
    {
      path: '/Order/',
      component: Order
    },
    {
      path: '/address',
      component: address
    },
    {
      path: '/address1',
      component: address1
    },
    {
      path: '/Submission',
      component: Submission
    },
    {
      path: '/Orderdetails',
      component: Orderdetails
    },
    {
      path: '/OrderdetailsX/',
      component: OrderdetailsX
    },
    {
      path: '/pinglun',
      component: pinglun
    }
  ]
})
