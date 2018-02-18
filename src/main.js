
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import url from './url'
import VueResource from 'vue-resource'
import store from '@/store';
Vue.config.productionTip = false

Vue.use( Vuex );
Vue.use(url);
Vue.use( VueResource );

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
