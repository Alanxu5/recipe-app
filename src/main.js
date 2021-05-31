import Vue from 'vue'
import App from '@/App'
import store from '@/store/store.js'
import router from '@/router/routes.js'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
