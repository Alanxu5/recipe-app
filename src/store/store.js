import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router/routes.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current_recipe: [],
    recipes: []
  },
  mutations: {
    SET_RECIPE: (state, { recipe }) => {
      state.current_recipe = recipe;
      router.push({name: 'recipes', params: { recipeData: recipe }});
    },
    SET_ALL_RECIPES: (state, { recipes }) => {
      state.recipes = recipes;
    },
  },
  actions: {
    addRecipe: async function ({ commit }, recipe) {
      try {
        // TODO: make it dynamic
        const response = await fetch('http://localhost:8000/recipes', {
          method: "POST",
          headers: { 
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify(recipe)
        });

        const responseJson = await response.json();

        if (response.ok) {
          commit('SET_RECIPE', {recipe: recipe})
        } else {
          console.log(response)
        }
      } catch(err) {
        console.log(err);
      }
    }, 
    getAllRecipes: async function ({ commit }) {
      try {
        const response = await fetch('http://localhost:8000/recipes', {
          method: "GET",
          headers: { 
            'Content-Type': 'application/json' 
          },
        });

        const responseJson = await response.json();

        if (response.ok) {
          commit('SET_ALL_RECIPES', {recipes: responseJson.recipes})
        } else {
          console.log(response)
        }        
      } catch(err) {
        console.log(err);
      }
    }    
  },
  getters: {
    getAllRecipes: state => {
      return state.recipes
    }
  }
})
