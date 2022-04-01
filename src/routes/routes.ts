import * as VueRouter from "vue-router";

import ListPage from '../components/ListPage.vue'
import SummaryPage from '../components/SummaryPage.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: '/', 
    component: SummaryPage,

  },
  {
    path: '/navigator', 
    component: ListPage,
  },
  { 
    path: '/:pathMatch(.*)*', 
    component: NotFound,
  },
]

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory('/transactions/'),
  routes,
})

