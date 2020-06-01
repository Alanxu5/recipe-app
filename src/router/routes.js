import Vue from 'vue'
import Router from 'vue-router'

import RecipeView from '@/router/RecipeView'
import HomeView from '@/router/HomeView'
import PlateView from '@/router/PlateView'
import ProfileView from '@/router/ProfileView'
import { authGuard } from '../auth/authGuard'

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
      component: ProfileView,
      beforeEnter: authGuard
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.name === 'home' && from.name === 'home' && Object.keys(from.query).length > 0) {
//     console.log(from);
//   }
//   next();
// });

export default router