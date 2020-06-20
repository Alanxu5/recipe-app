import Vue from 'vue'
import App from '@/App'
import store from '@/store/store.js'
import router from '@/router/routes.js'
import { Auth0Plugin } from "./auth";
import { domain, clientId, audience } from "../auth_config.json";

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
