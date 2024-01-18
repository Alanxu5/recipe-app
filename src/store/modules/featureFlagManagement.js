export default {
  state: {
    feature_flags: {}
  },
  mutations: {
    SET_FEATURE_FLAGS: (state) => {
      state.feature_flags = {};
    },
  },
  actions: {
    getFeatureFlags: function ({ commit }) {
      try {
        commit('SET_FEATURE_FLAGS', {
          enablePlate: false
        });
      } catch(err) {
        console.error(err);
      }
    },    
  },
  getters: {
    getFeatureFlags: state => {
      return state.feature_flags;
    }   
  }
};