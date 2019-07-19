import Vue from 'vue';
import Router from 'vue-router';
import Price from '@/components/Price';
import ProductList from '@/components/ProductList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Price',
      component: Price
    },
    {
      path: '/',
      name: 'ProductList',
      component: ProductList.default
    }
  ]
});
