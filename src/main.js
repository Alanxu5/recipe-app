import Vue from 'vue'
import App from '@/App'
import store from '@/store/store.js'
import router from '@/router/routes.js'
import { Auth0Plugin } from "./auth";
import { domain, clientId } from "../auth_config.json";

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false

const myApp = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

export default myApp;