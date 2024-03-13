import { createRouter, createWebHashHistory } from 'vue-router'
import CheckoutView from '../views/CheckoutView.vue'
import CheckoutMercadoPagoView from '@/views/CheckoutMercadoPagoView.vue'


const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'checkout',
    component: CheckoutView
  },
  {
    path: '/mp',
    name: 'checkoutmp',
    component: CheckoutMercadoPagoView
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
