import Vue from 'vue';
import Vuex from 'vuex';

import recipeManagement from './modules/recipeManagement';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    recipeManagement
  }
})

export default store;