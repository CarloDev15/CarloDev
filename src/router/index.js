import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Projects from '../components/Projects.vue'
import ErrorPage from '../views/ErrorPage.vue'

export const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes,
  { path: '/:pathMatch(.*)*', name: 'ErrorPage', component: ErrorPage },
  ]
});


router.afterEach(() => {
  window.scrollTo(0, 0)
});

export default router
