import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import UserProfile from '@/views/UserProfile.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/user',
    name: 'UserProfile',
    component: UserProfile
  },
]

const router = new VueRouter({
  routes
})

export default router
