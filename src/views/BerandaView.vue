<template>
  <div class="beranda">
    <h1>Selamat Datang di Perpustakaan Digital Fiksi</h1>
    <p>Temukan koleksi novel, komik, dan cerita terbaik dari seluruh dunia</p>
    
    <div class="highlight">
      <div class="highlight-item">
        <h3>📚 1000+ Koleksi Buku</h3>
        <p>Novel, komik, cerpen, dan banyak lagi</p>
      </div>
      <div class="highlight-item">
        <h3>⭐ Buku Terpopuler</h3>
        <p>Temukan apa yang sedang tren di komunitas kami</p>
      </div>
      <div class="highlight-item">
        <h3>🔍 Pencarian Canggih</h3>
        <p>Temukan buku impian Anda dengan mudah</p>
      </div>
    </div>
    
    <router-link to="/katalog" class="btn">Jelajahi Katalog</router-link>
  </div>
</template>

<script>
export default {
  name: 'BerandaView'
}
</script>

<style scoped>
.beranda {
  text-align: center;
  padding: 2rem;
}
.highlight {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
}
.highlight-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  width: 200px;
}
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1.1rem;
  transition: background-color 0.3s;
}
.btn:hover {
  background-color: #3aa876;
}
</style>