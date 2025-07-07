<template>
  <div class="katalog">
    <h2>Katalog Buku</h2>
    <nav class="sub-menu">
      <router-link to="/katalog">Daftar Buku</router-link>
      <router-link to="/katalog/kategori">Kategori</router-link>
      <router-link to="/katalog/populer">Buku Populer</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'KatalogView'
}
</script>

<style scoped>
.sub-menu {
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
}
.sub-menu a {
  padding: 0.5rem 1rem;
  background-color: #f0f0f0;
  border-radius: 4px;
  text-decoration: none;
  color: #333;
}
.sub-menu a.router-link-exact-active {
  background-color: #42b983;
  color: white;
}
</style>