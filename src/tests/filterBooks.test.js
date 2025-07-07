import { describe, it, expect } from 'vitest'
import { filterBooks } from '../utils/filterBooks'

const mockBooks = [
  { judul: 'Laskar Pelangi', pengarang: 'Andrea Hirata', genre: 'Novel' },
  { judul: 'Naruto', pengarang: 'Masashi Kishimoto', genre: 'Komik' },
  { judul: 'Dilan', pengarang: 'Pidi Baiq', genre: 'Romantis' }
]

describe('filterBooks()', () => {
  it('harus mengembalikan buku yang sesuai dengan judul', () => {
    const result = filterBooks(mockBooks, 'Naruto')
    expect(result).toHaveLength(1)
    expect(result[0].judul).toBe('Naruto')
  })

  it('harus mengembalikan buku yang sesuai dengan pengarang', () => {
    const result = filterBooks(mockBooks, 'Pidi')
    expect(result).toHaveLength(1)
    expect(result[0].pengarang).toBe('Pidi Baiq')
  })

  it('harus mengembalikan buku yang sesuai dengan genre', () => {
    const result = filterBooks(mockBooks, 'komik')
    expect(result).toHaveLength(1)
    expect(result[0].genre).toBe('Komik')
  })

  it('harus mengembalikan array kosong jika tidak ada yang cocok', () => {
    const result = filterBooks(mockBooks, 'filsafat')
    expect(result).toHaveLength(0)
  })
})
