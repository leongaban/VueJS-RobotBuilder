import Vue from 'vue'
import Router from 'vue-router'

import { HomePage, RobotBuilder } from '@/components'

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
  }]
})
