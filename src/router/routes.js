import Vue from 'vue'
import Router from 'vue-router'

import RecipeView from '@/router/RecipeView'
import HomeView from '@/router/HomeView'
// import { authGuard } from '../auth/authGuard'

// tells vue to use vue router
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/recipe',
      name: 'recipe',
      component: RecipeView
    }
  ]
})