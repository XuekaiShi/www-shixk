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
      path: '/:posts',
      name: 'postsView',
      component: () => import('../views/list/PostsView.vue')
    },
    { path: '/:pathMatch(.*)', component: NotFound }
  ]
})

export const posts = {
  all: "all",
  blogs: "blogs",
  notes: "notes",
  more: "more"
};

export default router
