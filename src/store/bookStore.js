// src/store/bookStore.js
import { defineStore } from 'pinia'

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    daftarBuku: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchBuku() {
      this.loading = true
      try {
        const res = await fetch('http://localhost:3000/buku')
        const data = await res.json()
        this.daftarBuku = data
      } catch (err) {
        this.error = 'Gagal memuat data buku'
        console.error(err)
      } finally {
        this.loading = false
      }
    }
  }
})
