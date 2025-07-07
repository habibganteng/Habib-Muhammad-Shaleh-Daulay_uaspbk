export function filterBooks(books, query) {
  const lowerQuery = query.toLowerCase()
  return books.filter(book =>
    book.judul.toLowerCase().includes(lowerQuery) ||
    book.pengarang.toLowerCase().includes(lowerQuery) ||
    book.genre.toLowerCase().includes(lowerQuery)
  )
}
