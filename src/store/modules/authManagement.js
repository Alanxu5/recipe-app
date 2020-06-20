import { getInstance } from "@/auth";

export default {
  state: {
    token: null
  },
  mutations: {
    SET_TOKEN:(state, token) => {
      state.token = token;
    }
  },
  actions: {
    retrieveTokenFromAuth: ({ commit }) => {
      return new Promise((resolve, reject) => {
        const instance = getInstance();
        instance.$watch("loading", loading => {
          if (loading === false && instance.isAuthenticated) {
            instance.getTokenSilently()
              .then(authToken => {
                commit("SET_TOKEN", authToken);
                resolve(authToken);
              })
              .catch(error => {
                reject(error);
              });
          }
        });
      });
    }
  },
  getters: {
    getToken: state => {
      return state.token;
    }
  }
};
