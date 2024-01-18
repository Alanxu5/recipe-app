import Vue from 'vue';
import Vuex from 'vuex';

import recipeManagement from './modules/recipeManagement';
import featureFlagManagement from './modules/featureFlagManagement';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    recipeManagement,
    featureFlagManagement
  }
})

export default store;