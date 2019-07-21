import Vue from 'vue'
import App from '@/App'
import store from '@/store/store.js'
import router from '@/router/routes.js'
import AuthPlugin from "@/plugins/auth";

Vue.use(AuthPlugin);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
