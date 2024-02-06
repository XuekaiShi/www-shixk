import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/all',
      name: 'all',
      component: () => import('../views/list/AllPostsView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/list/BlogView.vue')
    },
    {
      path: '/notes',
      name: 'notes',
      component: () => import('../views/list/NotesView.vue')
    },
    { path: '/:pathMatch(.*)', component: NotFound }
  ]
})

export default router
