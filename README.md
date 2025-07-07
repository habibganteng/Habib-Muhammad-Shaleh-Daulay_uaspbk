# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

Perpustakaan Digital Fiksi adalah sebuah aplikasi berbasis web yang dibangun
menggunakan Vue.js 3 dengan pendekatan SPA (Single Page Application). Aplikasi ini
memungkinkan pengguna untuk melihat katalog buku fiksi, melakukan pencarian, melihat
kategori, meminjam buku (secara simulasi), serta mengelola data buku melalui halaman
admin. Data disimpan dan disediakan melalui json-server sebagai REST API lokal.
Daftar Fitur Sistem
● Menampilkan daftar buku fiksi
● Fitur pencarian buku berdasarkan judul, pengarang, atau genre
● Fitur filter berdasarkan kategori genre
● Menampilkan buku populer
● Melihat riwayat peminjaman
● Login untuk admin
● Halaman tambah buku untuk admin
● Konsumsi API dari json-server
● Manajemen state menggunakan Pinia
● Unit test menggunakan Vitest
Struktur Menu Navigasi
Struktur menu navigasi pada Perpustakaan Digital Fiksi ini terdiri dari beranda, lalu
ada katalog yang isinya terdapat daftar buku, kategori, dan buku populer, lalu ada riwayat
pinjam, dan ada tambah buku(admin), dan terakhir ada login(admin).

Beranda, Katalog (parent) Datar Buku, Kategori, dan Buku Populer (child),
Riwayat Pinjam, Admin (Tambah Buku), Login (Admin)

pada Katalog bagian Daftar Buku (memuat…)
dan Riwayat Pinjam (hanya tampilan kosong) karena data mereka berada pada API server
json.
nah Endpoints disini terdiri dari buku dan riwayat yang dimana data Daftar Buku dan
Riwayat Pinjam terletak di folder/file db.json, 
Ini merupakan data pada db.json dan dapat dilihat pada data terakhir merupakan data

tambahan buku(admin) pada id 9939 merupakan tambahan buku.

Berikut endpoint REST API yang digunakan dari json-server :
📚 Buku (/buku)
● GET /buku – mendapatkan semua data buku
● GET /buku/:id – mendapatkan data detail buku berdasarkan ID
● POST /buku – menambahkan data buku baru
● PUT /buku/:id – mengedit data buku
● DELETE /buku/:id – menghapus data buku
📄 Riwayat Pinjam (/riwayatPinjam)
● GET /riwayatPinjam – melihat semua riwayat pinjam
● POST /riwayatPinjam – menambahkan data peminjaman buku
