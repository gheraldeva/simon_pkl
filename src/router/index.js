import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/datasiswa',
      name: 'datasiswa',
      component: () => import('../views/DataSiswaView.vue')
    },
    {
      path: '/dataguru',
      name: 'dataguru',
      component: () => import('../views/DataGuruView.vue')
    },
    {
      path: '/datadudi',
      name: 'datadudi',
      component: () => import('../views/DataDudiView.vue')
    },
    {
      path: '/laporansiswa',
      name: 'laporansiswa',
      component: () => import('../views/LaporanSiswa.vue')
    },
    {
      path: '/tambahdatasiswa',
      name: 'tambahdatasiswa',
      component: () => import('../views/TambahDataSiswa.vue')
    },
    {
      path: '/tambahdataguru',
      name: 'tambahdataguru',
      component: () => import('../views/TambahDataGuru.vue')
    },
    {
      path: '/tambahdatadudi',
      name: 'tambahdatadudi',
      component: () => import('../views/TambahDataDudi.vue')
    },
  ]
})

export default router
