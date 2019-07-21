import Vue from 'vue'
import Router from 'vue-router'

// @ is an alias for src directory
import RecipesView from '@/router/RecipesView'
import HomeView from '@/router/HomeView'
import Callback from '@/router/Callback'

// tells vue to use vue router
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/recipes',
      name: 'recipes',
      component: RecipesView
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