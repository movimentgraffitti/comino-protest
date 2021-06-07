import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import vueBraintree from 'vue-braintree';

Vue.config.productionTip = false
Vue.use(axios);
Vue.use(vueBraintree);

new Vue({
  render: h => h(App),
}).$mount('#app')
