import Vue from 'vue'
import Router from 'vue-router'

import RecipeView from '@/router/RecipeView'
import HomeView from '@/router/HomeView'
import PlateView from '@/router/PlateView'
import ProfileView from '@/router/ProfileView'

Vue.use(Router)

const router = new Router({
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
    },
    {
      path: '/plate',
      name: 'plate',
      component: PlateView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    }
  ]
})

export default router