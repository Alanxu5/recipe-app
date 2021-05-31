import router from '@/router/routes.js'
import { RepositoryFactory } from '@/repository/repositoryFactory';
const RecipesRepository = RepositoryFactory.get('recipes');

export default {
  state: {
    current_recipe: {},
    recipes: [],
    types: [],
    methods: [],
    filters: {
      type: [],
      method: []
    },
    plated_recipes: {}
  },
  mutations: {
    SET_CURRENT_RECIPE: (state, { recipe }) => {
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
    },
    ADD_FILTER: (state, { filterType, filter }) => {
      state.filters[filterType].push(filter);
    },
    REMOVE_FILTER: (state, { filterType, index }) => {
      state.filters[filterType].splice(index, 1);
    },
    SET_FILTERS: (state, { filterType, filters }) => {
      state.filters[filterType] = filters;
    },
    SET_RECIPE_PLATE: (state, plate) => {
      state.plated_recipes = plate;
    },
  },
  actions: {
    addRecipe: async function ({ commit }, recipe) {
      try {
        const directionArr = recipe.directions.split(/\n/);
        const directionObj = { ...directionArr };
        recipe.directions = directionObj;

        // [TODO] - get ingredient list data in a better way 
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
        const reponse = await RecipesRepository.createRecipe(recipe); 
        commit('SET_CURRENT_RECIPE', { recipe: reponse.data });
        router.push({ name: 'recipe', query: { id: reponse.data } });
      } catch(err) {
        console.error(err);
      }
    }, 
    getRecipes: async function ({ commit, state }) {
      try {
        const response = await RecipesRepository.getRecipes();
        const filteredRecipes = response.data
          .filter(recipe => {
            return state.filters.method.length > 0 ? state.filters.method.find(x => x === recipe.method) : true;
          })
          .filter(recipe => {
            return state.filters.type.length > 0 ? state.filters.type.find(y => y === recipe.type) : true;
          })
        commit('SET_ALL_RECIPES', { recipes: filteredRecipes });
      } catch(err) {
        console.error(err);
      }
    },
    getRecipe: async function ({ commit }, id) {
      try {
        const response = await RecipesRepository.getRecipe(id);
        commit('SET_CURRENT_RECIPE', { recipe: response.data });
      } catch(err) {
        console.error(err);
      }
    },
    getRecipeTypes: async function ({ commit }) {
      try {
        const response = await fetch(`http://localhost:8000/api/recipes/types`, {
          method: "GET",
          headers: { 
            'Content-Type': 'application/json' 
          },
        });

        const responseJson = await response.json();

        if (response.ok) {
          commit('SET_RECIPE_TYPES', { types: responseJson }); 
        } else {
          console.error(response)
        }   
      } catch (err) {
        console.error(err);
      }
    },
    getMethodTypes: async function ({ commit }) {
      try {
        const response = await fetch(`http://localhost:8000/api/recipes/methods`, {
          method: "GET",
          headers: { 
            'Content-Type': 'application/json' 
          },
        });

        const responseJson = await response.json();

        if (response.ok) {
          commit('SET_RECIPE_METHODS', { methods: responseJson }); 
        } else {
          console.error(response);
        }   
      } catch (err) {
        console.error(err);
      }
    },
    addFilter: function ({ commit, state, dispatch }, { filterType, filter }) {
      const index = state.filters[filterType].findIndex(x => x === filter.name);  
      if (index === -1) {
        commit('ADD_FILTER', { filterType, filter: filter.name });
      } else {
        commit('REMOVE_FILTER', { filterType, index });
      }

      const filters = {
        'type' : state.filters.type.toString() === '' ? null : state.filters.type.toString(),
        'method' : state.filters.method.toString() === '' ? null : state.filters.method.toString()
      }
      
      if (filters.type === null && filters.method === null ) {
        router.push({ name: 'home'});
      } else {
        router.push({ query: { ...filters }});
      }
      dispatch('getRecipes');
    },
    addQueryFilters ({ commit }, { filterType, filters }) {
      commit('SET_FILTERS', { filterType, filters } );
    },
    addRecipeToPlate: function ({ commit }, { recipe }) {
      const plateLocalStorage = localStorage.getItem('plate');
      let plate = {
        [recipe.type]: recipe
      };

      // [TODO] - if user is not logged in
      if (plateLocalStorage) {
        plate = { ...JSON.parse(plateLocalStorage), ...plate };
      } 
      localStorage.setItem('plate', JSON.stringify(plate));
      // else hit API

      commit('SET_RECIPE_PLATE', plate);
    },
    removeRecipeFromPlate ({ commit }, { recipeId }) {
      const plateLocalStorage = JSON.parse(localStorage.getItem('plate'));
      const recipeKey = Object.keys(plateLocalStorage).find(key => plateLocalStorage[key].id === recipeId);

      delete plateLocalStorage[recipeKey];
      localStorage.setItem('plate', JSON.stringify(plateLocalStorage));
      commit('SET_RECIPE_PLATE', plateLocalStorage);
    },
    getLocalStorageData ({ commit }) {
      const plateLocalStorage = localStorage.getItem('plate');
      if (plateLocalStorage) {
        commit('SET_RECIPE_PLATE', JSON.parse(plateLocalStorage));
      }
    },
    async getPlatedRecipes ({ commit, state }) {
      try {
        const recipes = Object.values(state.plated_recipes);
        const platedRecipes = {};
        
        const requests = recipes.map(recipe => {
          return fetch(`http://localhost:8000/api/recipes/${recipe.id}`);
        });
        
        Promise.all(requests)
          .then( async (responses) => {
            for (var response of responses) {
              const responseJson = await response.json(); 
              platedRecipes[responseJson.type] = (responseJson);
            }

            commit('SET_RECIPE_PLATE', platedRecipes); 
          });
        
      } catch(err) {
        console.error(err);
      }
    }
  },
  getters: {
    getCurrentRecipe: state => {
      return state.current_recipe;
    },
    getRecipes: state => {
      return state.recipes;
    },
    getRecipe: state => (id) => {
      return state.recipes.find(recipe => recipe.id === id);
    },
    getRecipeTypes: state => {
      return state.types;
    },
    getRecipeMethods: state => {
      return state.methods;
    },
    getFilters: state => {
      return state.filters;
    },
    getPlatedRecipes: state => {
      return state.plated_recipes;
    }
  }
};
