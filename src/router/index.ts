import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('../views/home/home.vue')
    },
    {
      path: '/message',
      component: () => import('../views/message/message.vue')
    },
    {
      path: '/personal',
      component: () => import('../views/personal/personal.vue')
    },
    {
      path: '/animation',
      component: () => import('../views/animation/animation.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/notFound/not-found.vue')
    }
  ]
})

export default router
