<template>
  <div class="kategori">
    <h3>Kategori Buku Fiksi</h3>
    <div class="kategori-grid">
      <div 
        class="kategori-card" 
        v-for="kategori in daftarKategori" 
        :key="kategori.id"
        @click="filterByKategori(kategori.nama)"
      >
        <div class="icon">
          {{ kategori.emoji }}
        </div>
        <h4>{{ kategori.nama }}</h4>
        <p>{{ kategori.jumlah }} buku</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KategoriBuku',
  data() {
    return {
      daftarKategori: [
        {
          id: 1,
          nama: 'Novel',
          emoji: '📖',
          jumlah: 42
        },
        {
          id: 2,
          nama: 'Komik',
          emoji: '🖍️',
          jumlah: 35
        },
        {
          id: 3,
          nama: 'Cerpen',
          emoji: '📝',
          jumlah: 28
        },
        {
          id: 4,
          nama: 'Fantasi',
          emoji: '🧙',
          jumlah: 19
        },
        {
          id: 5,
          nama: 'Romantis',
          emoji: '💘',
          jumlah: 31
        },
        {
          id: 6,
          nama: 'Misteri',
          emoji: '🕵️',
          jumlah: 22
        },
        {
          id: 7,
          nama: 'Petualangan',
          emoji: '🗺️',
          jumlah: 27
        },
        {
          id: 8,
          nama: 'Sejarah',
          emoji: '🏛️',
          jumlah: 15
        }
      ]
    }
  },
  methods: {
    filterByKategori(kategori) {
      this.$router.push({ 
        path: '/katalog',
        query: { kategori: kategori.toLowerCase() }
      })
    }
  }
}
</script>

<style scoped>
.kategori {
  padding: 1rem;
}
.kategori-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}
.kategori-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}
.kategori-card:hover {
  background-color: #f0f0f0;
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.kategori-card h4 {
  margin: 0.5rem 0;
  color: #333;
}
.kategori-card p {
  margin: 0;
  font-size: 0.8rem;
  color: #666;
}
</style>