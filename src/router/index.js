import Vue from 'vue'
import Router from 'vue-router'

// @ is an alias for src directory
import Recipes from '@/components/Recipes.vue'
import Home from '@/components/Home.vue'
import Callback from '@/components/Callback.vue'

// tells vue to use vue router
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/recipes',
      name: 'recipes',
      component: Recipes
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback
    }
  ]
})