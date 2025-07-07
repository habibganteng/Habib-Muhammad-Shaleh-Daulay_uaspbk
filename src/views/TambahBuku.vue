<template>
  <div class="tambah-buku">
    <h2>Tambah Buku Fiksi Baru</h2>
    <form @submit.prevent="simpanBuku">
      <div class="form-group">
        <label>Judul:</label>
        <input type="text" v-model="buku.judul" required>
      </div>
      <div class="form-group">
        <label>Pengarang:</label>
        <input type="text" v-model="buku.pengarang" required>
      </div>
      <div class="form-group">
        <label>Genre:</label>
        <select v-model="buku.genre" required>
          <option value="">Pilih Genre</option>
          <option value="Novel">Novel</option>
          <option value="Komik">Komik</option>
          <option value="Cerpen">Cerpen</option>
          <option value="Fantasi">Fantasi</option>
          <option value="Romantis">Romantis</option>
          <option value="Misteri">Misteri</option>
        </select>
      </div>
      <div class="form-group">
        <label>Sinopsis:</label>
        <textarea v-model="buku.sinopsis" rows="4"></textarea>
      </div>
      <div class="form-group">
        <label>Cover URL:</label>
        <input type="url" v-model="buku.gambar" placeholder="https://...">
      </div>
      <button type="submit">Simpan Buku</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TambahBuku',
  data() {
    return {
      buku: {
        judul: '',
        pengarang: '',
        genre: '',
        sinopsis: '',
        gambar: ''
      }
    }
  },
  methods: {
    simpanBuku() {
      fetch('http://localhost:3000/buku', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...this.buku,
          rating: 0,
          tersedia: true
        })
      })
        .then(res => {
          if (!res.ok) throw new Error('Gagal menyimpan')
          return res.json()
        })
        .then(() => {
          alert(`Buku "${this.buku.judul}" berhasil ditambahkan!`)
          this.buku = {
            judul: '',
            pengarang: '',
            genre: '',
            sinopsis: '',
            gambar: ''
          }
        })
        .catch(err => {
          alert('Terjadi kesalahan saat menyimpan data')
          console.error(err)
        })
    }
  }
}
</script>

<style scoped>
.tambah-buku {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}
.form-group {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
input, select, textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}
button:hover {
  background-color: #3aa876;
}
</style>