import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import( '../views/Contacts.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import( '../views/History.vue')
  },
  {
    path: '/directives',
    name: 'directives',
    component: () => import( '../views/DirectivesExample.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router
