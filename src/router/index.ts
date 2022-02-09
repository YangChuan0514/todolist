import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/todolist',
    name: 'TodoList',
    component: () => import('../views/todolist/index.vue'),
    meta: {
      title: 'todolist'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
})

export default router
