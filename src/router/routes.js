import Vue from 'vue'
import Router from 'vue-router'

import RecipeView from '@/router/RecipeView'
import HomeView from '@/router/HomeView'
// import PlateView from '@/router/PlateView'
import ProfileView from '@/router/ProfileView'
import SubmitView from '@/router/SubmitView'

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
    // {
    //   path: '/plate',
    //   name: 'plate',
    //   component: PlateView,
    // },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/submit',
      name: 'submit',
      component: SubmitView
    }
  ]
})

export default router