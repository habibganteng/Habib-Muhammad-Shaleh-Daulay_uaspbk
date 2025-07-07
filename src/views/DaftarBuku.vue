<template>
  <div class="daftar-buku">
    <h3>Daftar Buku Fiksi</h3>
    <div class="search-box">
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Cari buku..."
        @input="filterBuku"
      >
    </div>

    <div v-if="bookStore.loading">Memuat buku...</div>
    <div v-else-if="bookStore.error">{{ bookStore.error }}</div>

    <div class="buku-grid" v-else>
      <div class="buku-card" v-for="buku in filteredBuku" :key="buku.id">
        <div class="cover">
          <img :src="buku.gambar" :alt="buku.judul">
        </div>
        <div class="info">
          <h4>{{ buku.judul }}</h4>
          <p class="penulis">{{ buku.pengarang }}</p>
          <p class="genre">{{ buku.genre }}</p>
          <p class="sinopsis">{{ buku.sinopsis }}</p>
          <div class="rating">
            <span v-for="i in 5" :key="i">★</span>
            <span>({{ buku.rating }})</span>
          </div>
          <button @click="pinjamBuku(buku.id)">Pinjam</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useBookStore } from '../store/bookStore'

const bookStore = useBookStore()
const searchQuery = ref('')
const filteredBuku = ref([])

onMounted(async () => {
  await bookStore.fetchBuku()
  filteredBuku.value = bookStore.daftarBuku
})

function filterBuku() {
  filteredBuku.value = bookStore.daftarBuku.filter(buku => {
    return (
      buku.judul.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      buku.pengarang.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      buku.genre.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  })
}

function pinjamBuku(id) {
  const buku = bookStore.daftarBuku.find(b => b.id === id)
  if (buku?.tersedia) {
    alert(`Anda telah meminjam buku: ${buku.judul}`)
  } else {
    alert('Maaf, buku sedang tidak tersedia')
  }
}
</script>

<style scoped>
/* Tetap gunakan style tampilannya seperti project awal */
.daftar-buku {
  padding: 1rem;
}
.search-box {
  margin-bottom: 1rem;
}
.search-box input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.buku-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
.buku-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  transition: transform 0.3s;
}
.buku-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
.cover {
  width: 120px;
  background: #f5f5f5;
}
.cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.info {
  padding: 1rem;
  flex: 1;
}
.info h4 {
  margin: 0 0 0.5rem 0;
  color: #333;
}
.penulis {
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 0.5rem 0;
}
.genre {
  display: inline-block;
  background: #f0f0f0;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  margin: 0 0 0.5rem 0;
}
.sinopsis {
  font-size: 0.9rem;
  color: #555;
  margin: 0 0 0.5rem 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.rating {
  color: gold;
  margin-bottom: 0.5rem;
}
.rating span:last-child {
  color: #666;
  margin-left: 0.5rem;
}
button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #3aa876;
}
</style>
