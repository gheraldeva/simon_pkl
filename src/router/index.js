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
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/about/:id',
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
      path: '/datajurusan',
      name: 'datajurusan',
      component: () => import('../views/DataJurusanView.vue')
    },
    {
      path: '/tambahdatajurusan',
      name: 'tambahdatajurusan',
      component: () => import('../views/TambahDataJurusan.vue')
    },
    {
      path: '/tambahdatakelas',
      name: 'tambahdatakelas',
      component: () => import('../views/TambahDataKelas.vue')
    },
    {
      path: '/datakelas',
      name: 'datakelas',
      component: () => import('../views/DataKelasView.vue')
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
    {
      path: '/detaildudi/:id',
      name: 'detaildudiview',
      component: () => import('../views/DetailDudiView.vue')
    },
    {
      path: '/editdudi/:id',
      name: 'editdudi',
      component: () => import('../views/EditDudi.vue')
    },
    {
      path: '/detailsiswa/:id',
      name: 'detailsiswaview',
      component: () => import('../views/DetailSiswaView.vue')
    },
    {
      path: '/editsiswa/:id',
      name: 'editsiswa',
      component: () => import('../views/EditSiswa.vue')
    },
    {
      path: '/detailguru/:id',
      name: 'detailguruview',
      component: () => import('../views/DetailGuruView.vue')
    },
    {
      path: '/editguru/:id',
      name: 'editguru',
      component: () => import('../views/EditGuru.vue')
    },
    {
      path: '/editalamatguru/:id',
      name: 'editalamatguru',
      component: () => import('../views/EditAlamatGuru.vue')
    },
    {
      path: '/editalamatsiswa/:id',
      name: 'editalamatsiswa',
      component: () => import('../views/EditAlamatSiswa.vue')
    },
    {
      path: '/editalamatdudi/:id',
      name: 'editalamatdudi',
      component: () => import('../views/EditAlamatDudi.vue')
    },
    
  ]
})

export default router
