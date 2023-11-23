import { useState, useMemo, useEffect } from 'react'
import { type Library } from '../types'
import { useFilters } from './useFilters'

export function useBooks () {
  const [books, setBooks] = useState<Library[]>([])
  const [loading, setLoading] = useState(true)
  const { filterBooks } = useFilters()

  const booksPages = useMemo(() => {
    const pages = books.map(({ book }) => book.pages)

    const min = Math.min(...pages)
    const max = Math.max(...pages)

    // books.forEach(({ book }) => {
    //   if (book.pages < ranges.min) {
    //     ranges.min = book.pages
    //   }

    //   if (book.pages > ranges.max) {
    //     ranges.max = book.pages
    //   }
    //   console.log(ranges)
    // })

    return { min, max }
  }, [books])

  const booksGenres = useMemo(() => {
    const genres = new Set(books.map(({ book }) => book.genre))

    return ['todos', ...genres]
  }, [books])

  const filteredBooks = filterBooks(books)

  useEffect(() => {
    setLoading(true)
    fetch('books.json')
      .then(async data => await data.json())
      .then(data => { setBooks(data.library) })
      .catch(err => { console.log(err, 'error') })
      .finally(() => { setLoading(false) })
  }, [])

  return { books, booksGenres, booksPages, filteredBooks, loading }
}
