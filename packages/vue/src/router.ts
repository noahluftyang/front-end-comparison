import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from './views/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    component: HomeView,
    path: '/',
  },
  {
    component: () => import(/* webpackChunkName: "login" */ './views/login.vue'),
    path: '/login',
  },
  {
    component: () => import(/* webpackChunkName: "movies" */ './views/movies.vue'),
    path: '/movies',
  },
  {
    component: () => import(/* webpackChunkName: "search" */ './views/search.vue'),
    path: '/search',
  },
];

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
