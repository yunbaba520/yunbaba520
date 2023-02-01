import { localCache } from '@/utils/cache'
import { firstRoute, mapMenuToRoutes } from '@/utils/mapMenus'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/main/main.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/notFound/not-found.vue')
    }
  ]
})
// 导航守卫
router.beforeEach((to) => {
  const token = localCache.getCache('login/token')
  // 去其他页面并且没有token
  if (to.path !== '/login' && !token) {
    return '/login'
  }
  // 去main并且有登录，跳转第一个子页面(用于登录后跳转main路径)
  if (to.path === '/main' && token && firstRoute) {
    return firstRoute.path
  }
})
// 动态路由两种实现
// 1.根据角色role动态加载路由
// 前端需要有一一对应关系，比如 总裁->对应的路由  组长->对应的路由。。。
// 弊端：比较死板，新增一个角色的话需要修改前端代码，新增一个key value,也可以后端返回json，对后端要求高，不好组织代码
// 2. 根据菜单动态加载
// 我们在登录后有拿到usermenus 映射成路由对象

export function addRoutesWithMenu(menus: any) {
  // 1.获取匹配到的所有的路由
  const routes = mapMenuToRoutes(menus)
  // 2.动态添加到router中
  for (const route of routes) {
    router.addRoute('main', route)
  }
}
export default router
