import Vue from 'vue'
import Router from 'vue-router'

import RecipeView from '@/router/RecipeView'
import HomeView from '@/router/HomeView'
import Callback from '@/router/Callback'

// tells vue to use vue router
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/recipe',
      name: 'recipe',
      component: RecipeView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback
    }
  ]
})