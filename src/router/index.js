import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'beranda',
      component: () => import('../views/BerandaView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/katalog',
      name: 'katalog',
      component: () => import('../views/KatalogView.vue'),
      children: [
        {
          path: '',
          name: 'daftar-buku',
          component: () => import('../views/DaftarBuku.vue')
        },
        {
          path: 'kategori',
          name: 'kategori',
          component: () => import('../views/KategoriBuku.vue')
        },
        {
          path: 'populer',
          name: 'buku-populer',
          component: () => import('../views/BukuPopuler.vue')
        }
      ]
    },
    {
      path: '/riwayat',
      name: 'riwayat-pinjam',
      component: () => import('../views/RiwayatPinjam.vue')
    },
    {
      path: '/admin',
      children: [
        {
          path: 'tambah-buku',
          name: 'tambah-buku',
          component: () => import('../views/TambahBuku.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router