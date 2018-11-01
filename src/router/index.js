import Vue from 'vue'
import Router from 'vue-router'
import timezone from '@/components/timezone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'timezone',
      component: timezone
    }
  ]
})
