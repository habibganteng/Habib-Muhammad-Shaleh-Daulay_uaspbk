import { setActivePinia, createPinia } from 'pinia'
import { useBookStore } from '@/store/bookStore'

describe('Book Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should fetch book data and store it in daftarBuku', async () => {
    const store = useBookStore()

    // Mock fetch manual (karena kita tidak akses server langsung)
    const mockData = [
      { id: 1, judul: 'Buku Satu', pengarang: 'Penulis A', tersedia: true },
      { id: 2, judul: 'Buku Dua', pengarang: 'Penulis B', tersedia: false }
    ]

    // Gantikan fetch() dengan hasil mock
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData)
      })
    )

    await store.fetchBuku()

    expect(store.daftarBuku.length).toBe(2)
    expect(store.daftarBuku[0].judul).toBe('Buku Satu')
  })
})
