import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Routes from './routes';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.prototype.$http = axios

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(axios);
Vue.use(VueAxios);


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
