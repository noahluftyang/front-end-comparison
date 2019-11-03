import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from './views/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    component: HomeView,
    name: 'home',
    path: '/',
  },
  {
    component: () => import(/* webpackChunkName: "movies" */ './views/movies.vue'),
    name: 'movies',
    path: '/movies',
  },
  {
    component: () => import(/* webpackChunkName: "search" */ './views/search.vue'),
    name: 'search',
    path: '/search',
  },
];

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
