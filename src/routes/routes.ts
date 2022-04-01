import * as VueRouter from "vue-router";

import ListPage from '../components/ListPage.vue'
import SummaryPage from '../components/SummaryPage.vue'

const routes = [
  {
    path: '/', 
    component: SummaryPage,

  },
  {
    path: '/navigator', 
    component: ListPage,
  },
]

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})

