import { createRouter, createWebHashHistory } from 'vue-router'
import CheckoutView from '../views/CheckoutView.vue'
import CheckoutMercadoPagoView from '@/views/CheckoutMercadoPagoView.vue'


const routes = [
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
