<template>
  <div class="populer">
    <h3>Buku Paling Populer</h3>
    <div class="buku-list">
      <div class="buku-item" v-for="(buku, index) in bukuPopuler" :key="buku.id">
        <div class="rank">{{ index + 1 }}</div>
        <img :src="buku.gambar" :alt="buku.judul">
        <div class="info">
          <h4>{{ buku.judul }}</h4>
          <p class="penulis">{{ buku.pengarang }}</p>
          <div class="stats">
            <span class="pinjam">💖 {{ buku.dipinjam }}x dipinjam</span>
            <span class="rating">⭐ {{ buku.rating }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BukuPopuler',
  data() {
    return {
      bukuPopuler: [
        {
          id: 1,
          judul: 'Laskar Pelangi',
          pengarang: 'Andrea Hirata',
          dipinjam: 128,
          rating: 4.7,
          gambar: '/img/buku/laskar-pelangi.jpg'
        },
        {
          id: 2,
          judul: 'Dilan 1990',
          pengarang: 'Pidi Baiq',
          dipinjam: 115,
          rating: 4.5,
          gambar: '/img/buku/dilan-1990.jpg'
        },
        {
          id: 3,
          judul: 'One Piece Vol. 1',
          pengarang: 'Eiichiro Oda',
          dipinjam: 98,
          rating: 4.9,
          gambar: '/img/buku/one-piece.jpg'
        },
        {
          id: 4,
          judul: 'Perahu Kertas',
          pengarang: 'Dee Lestari',
          dipinjam: 87,
          rating: 4.4,
          gambar: '/img/buku/perahu-kertas.jpg'
        },
        {
          id: 5,
          judul: 'Naruto Vol. 1',
          pengarang: 'Masashi Kishimoto',
          dipinjam: 85,
          rating: 4.8,
          gambar: '/img/buku/naruto.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.populer {
  padding: 1rem;
}
.buku-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.buku-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 8px;
  background: #f9f9f9;
}
.buku-item:hover {
  background: #f0f0f0;
}
.rank {
  font-size: 1.5rem;
  font-weight: bold;
  color: #42b983;
  min-width: 30px;
  text-align: center;
}
.buku-item img {
  width: 60px;
  height: 90px;
  object-fit: cover;
  border-radius: 4px;
}
.info {
  flex: 1;
}
.info h4 {
  margin: 0 0 0.3rem 0;
}
.penulis {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  color: #666;
}
.stats {
  display: flex;
  gap: 1rem;
  font-size: 0.8rem;
}
.pinjam, .rating {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
</style>