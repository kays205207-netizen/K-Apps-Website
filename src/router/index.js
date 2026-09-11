import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Admin from '../pages/Admin.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
  {
    path: '/',
    component: Home,
    meta: { title: 'K-Apps | الرئيسية' }
  },
  {
    path: '/admin',
    component: Admin,
    meta: { title: 'K-Apps | لوحة التحكم', requiresAuth: true }
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    meta: { title: 'K-Apps | الصفحة غير موجودة' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('admin_token')
    if (!token) {
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router