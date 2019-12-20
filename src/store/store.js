import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router/routes.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current_recipe: {},
    recipes: [],
    types: [],
    methods: []
  },
  mutations: {
    SET_RECIPE: (state, { recipe }) => {
      state.current_recipe = recipe;
    },
    SET_ALL_RECIPES: (state, { recipes }) => {
      state.recipes = recipes;
    },
    SET_RECIPE_TYPES: (state, { types }) => {
      state.types = types;
    },   
    SET_RECIPE_METHODS: (state, { methods }) => {
      state.methods = methods;
    }
  },
  actions: {
    addRecipe: async function ({ commit }, recipe) {
      try {
        const directionArr = recipe.directions.split(/\n/);
        const directionObj = { ...directionArr };
        recipe.directions = directionObj;

        // TODO[AX]: get ingredient list data in a better way 
        const ingredientArr = recipe.ingredients.split(/\n/);
        const ingredientObjArr = ingredientArr.map(ingredient => {
          const value = ingredient.split('|');
          return {
            amount: parseFloat(value[0] ? value[0].trim() : value[0]),
            unit: value[1] ? value[1].trim() : value[1],
            ingredient: value[2] ? value[2].trim() : value[2],
            preparation: value[3] ? value[3].trim() : value[3]
          }
        })
        recipe.ingredients = ingredientObjArr;

        const equipmentArr = recipe.equipment.split(/\n/);
        const equipmentObjArr = equipmentArr.map(equipment => {
          const value = equipment.split('|');
          return {
            description: value[0] ? value[0].trim() : value[0],
            item: value[1] ? value[1].trim() : value[1],
          }
        })

        recipe.equipment = equipmentObjArr;
        
        const response = await fetch('http://localhost:8000/recipes', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify(recipe)
        });

        const responseJson = await response.json();

        if (response.ok) {
          commit('SET_RECIPE', { recipe: recipe });
          router.push({ name: 'recipe', query: { id: responseJson } });
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
          commit('SET_ALL_RECIPES', {recipes: responseJson})
        } else {
          console.log(response)
        }        
      } catch(err) {
        console.log(err);
      }
    },
    getRecipe: async function ({ commit }, id) {
      try {
        const response = await fetch(`http://localhost:8000/recipes/${id}`, {
          method: "GET",
          headers: { 
            'Content-Type': 'application/json' 
          },
        });

        const responseJson = await response.json();

        if (response.ok) {
          commit('SET_RECIPE', { recipe: responseJson });
        } else {
          console.log(response)
        }        
      } catch(err) {
        console.log(err);
      }
    },
    getRecipeTypes: async function ({ commit }) {
      try {
        const response = await fetch(`http://localhost:8000/recipes/types`, {
          method: "GET",
          headers: { 
            'Content-Type': 'application/json' 
          },
        });

        const responseJson = await response.json();

        if (response.ok) {
          commit('SET_RECIPE_TYPES', { types: responseJson }); 
          console.log(responseJson);
        } else {
          console.log(response)
        }   
      } catch (err) {
        console.log(err);
      }
    },
    getMethodTypes: async function ({ commit }) {
      try {
        const response = await fetch(`http://localhost:8000/recipes/methods`, {
          method: "GET",
          headers: { 
            'Content-Type': 'application/json' 
          },
        });

        const responseJson = await response.json();

        if (response.ok) {
          commit('SET_RECIPE_METHODS', { methods: responseJson }); 
          console.log(responseJson);
        } else {
          console.log(response)
        }   
      } catch (err) {
        console.log(err);
      }
    }
  },
  getters: {
    getAllRecipes: state => {
      return state.recipes
    },
    getRecipe: state => (id) => {
      return state.recipes.find(recipe => recipe.id === id);
    },
    getRecipeTypes: state => {
      return state.types;
    },
    getRecipeMethods: state => {
      return state.methods;
    }
  }
})
