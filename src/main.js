// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faDollarSign,
  faSortDown,
  faShoppingCart,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';

import Products from './components/Products.vue';
import Checkout from './components/Checkout.vue';

library.add(faSortDown);
library.add(faDollarSign);
library.add(faShoppingCart);
library.add(faTrash);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: '*',
      component: Products
    },
    {
      path: '/checkout',
      component: Checkout
    }
  ]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
