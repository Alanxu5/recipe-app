import Vue from 'vue'
import Router from 'vue-router'

import RecipeView from '@/router/RecipeView'
import HomeView from '@/router/HomeView'
// import { authGuard } from '../auth/authGuard'

// tells vue to use vue router
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