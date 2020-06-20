import Vue from 'vue';
import Vuex from 'vuex';

import recipeManagement from './modules/recipeManagement';
import authManagement from './modules/authManagement';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    recipeManagement,
    authManagement    
  }
})

export default store;