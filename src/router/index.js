import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { startLoading, stopLoading } from '../stores/ui'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { keepAlive: true }
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/Menu.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/reservations',
    name: 'Reservations',
    component: () => import('../views/Reservations.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: () => import('../views/Reviews.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: { keepAlive: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach(() => { startLoading() })

router.afterEach(() => { stopLoading() })

router.onError(() => { stopLoading() })

export default router
