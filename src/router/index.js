import Vue from 'vue'
import Router from 'vue-router'


import { HomePage, RobotBuilder, PartInfo } from '@/components'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  }, {
    path: '/build',
    name: 'Build',
    component: RobotBuilder,
  }, {
    path: '/parts/:partType/:id',
    name: 'PartInfo',
    component: PartInfo,
    props: true
  }]
})
