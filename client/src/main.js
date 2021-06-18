import Vue from 'vue'
import router from "./router";
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(require("vue-moment"));

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
