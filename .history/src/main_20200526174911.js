import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Routes from './routes';
import store from './store';
const fetch = require('node-fetch');


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(fetch);


  const router = new VueRouter({
    mode:'history',
   routes: Routes
   
});
Vue.config.productionTip = false;

new Vue({
  store,
  router: router,
  el: "#app",
  render: h => h(App),
}).$mount('#app');
