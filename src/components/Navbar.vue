<template>
  <nav class="navbar">
    <router-link to="/">Beranda</router-link>
    <router-link to="/katalog">Katalog</router-link>
    <router-link to="/riwayat">Riwayat Pinjam</router-link>
    <router-link to="/admin/tambah-buku">Admin</router-link>
    <router-link to="/login" class="login-link">Login</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 1rem;
  display: flex;
  gap: 1rem;
}
.navbar a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
}
.navbar a.router-link-exact-active {
  background-color: #42b983;
  border-radius: 4px;
}
.login-link {
  margin-left: auto;
}
</style>