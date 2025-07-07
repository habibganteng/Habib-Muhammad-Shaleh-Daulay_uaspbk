<template>
  <div class="riwayat">
    <h2>Riwayat Peminjaman Buku Fiksi</h2>
    <div class="filter">
      <select v-model="filterStatus">
        <option value="semua">Semua Status</option>
        <option value="dipinjam">Sedang Dipinjam</option>
        <option value="dikembalikan">Sudah Dikembalikan</option>
      </select>
    </div>
    <div class="riwayat-list">
      <div class="riwayat-item" v-for="item in filteredRiwayat" :key="item.id">
        <img :src="item.gambar" :alt="item.judul" class="cover" />
        <div class="detail">
          <h4>{{ item.judul }}</h4>
          <p class="penulis">{{ item.pengarang }}</p>
          <p class="tanggal">Dipinjam: {{ item.tanggalPinjam }}</p>
          <p class="status" :class="item.status">
            {{ item.status === 'dipinjam' ? 'Sedang Dipinjam' : 'Sudah Dikembalikan' }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RiwayatPinjam',
  data() {
    return {
      filterStatus: 'semua',
      riwayatPinjam: []
    }
  },
  computed: {
    filteredRiwayat() {
      if (this.filterStatus === 'semua') {
        return this.riwayatPinjam
      }
      return this.riwayatPinjam.filter(item => item.status === this.filterStatus)
    }
  },
  created() {
    fetch('http://localhost:3000/riwayat')
      .then(res => res.json())
      .then(data => {
        this.riwayatPinjam = data
      })
      .catch(err => console.error('Gagal memuat data riwayat pinjam:', err))
  }
}
</script>

<style scoped>
.riwayat {
  padding: 1rem;
}
.filter {
  margin-bottom: 1rem;
}
.filter select {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.riwayat-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.riwayat-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}
.cover {
  width: 60px;
  height: 90px;
  object-fit: cover;
  border-radius: 4px;
}
.detail {
  flex: 1;
}
.detail h4 {
  margin: 0 0 0.3rem 0;
}
.penulis {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  color: #666;
}
.tanggal {
  margin: 0 0 0.3rem 0;
  font-size: 0.9rem;
}
.status {
  display: inline-block;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}
.status.dipinjam {
  background-color: #fff3cd;
  color: #856404;
}
.status.dikembalikan {
  background-color: #d4edda;
  color: #155724;
}
</style>