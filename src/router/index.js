import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/technique',
      name: 'technique',
      component: () => import('../views/TechniqueView.vue')
    },
    {
      path: '/suivi-projet',
      name: 'suivi-projet',
      component: () => import('../views/SuiviProjetView.vue')
    },
    {
      path: '/integration',
      name: 'integration',
      component: () => import('../views/IntegrationView.vue')
    }
  ]
})

export default router
