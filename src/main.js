import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import vueBraintree from 'vue-braintree';
import VeeValidate from 'vee-validate';

Vue.config.productionTip = false
Vue.use(axios);
Vue.use(vueBraintree);
Vue.use(VeeValidate);

new Vue({
  render: h => h(App),
}).$mount('#app')
