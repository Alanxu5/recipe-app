import Vue from 'vue'
import Router from 'vue-router'

// @ is an alias for src directory
import RecipesView from '@/router/RecipesView'
import TheHome from '@/router/TheHome'
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
      component: TheHome
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback
    }
  ]
})