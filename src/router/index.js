import { createRouter, createWebHistory } from 'vue-router'
import Magasin from '../views/Magasin.vue'

const routes = [
  {
    path: '/',
    name: 'magasin',
    component: Magasin
  },
  {
    path: '/commande',
    name: 'commande',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "commande" */ '../views/Commande.vue')
  },
  {
    path: '/disque/:id',
    name: '/disque',
    component: () => import(/* webpackChunkName: "commande" */ '../views/DetailsDisque.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
