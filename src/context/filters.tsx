import { createContext, useEffect, useState } from 'react'
import { type GENRES } from '../const'
import { type Library } from '../types'
import { getGenreFromUrl } from '../utils/getGenre'

export interface Filters {
  range: number[]
  query: string
  genreSelected: typeof GENRES.TODOS | string
  filterBooks: (books: Library[]) => Library[]
  onChangeQuery: (query: string) => void
  onChangeGenre: (genre: Filters['genreSelected']) => void
  onChangeRange: (range: number[]) => void
}

export const FilterContext = createContext<Filters | null>(null)

export function FilterProvider ({ children }: { children: React.ReactNode }) {
  const [range, setRange] = useState([0, 2000])
  const [query, setQuery] = useState('')
  const [genreSelected, setGenreSelected] = useState<Filters['genreSelected']>(() => getGenreFromUrl())

  function filterBooks (books: Library[]) {
    const [min, max] = range
    return books.filter(({ book }) => {
      return (
        genreSelected === 'todos' || book.genre === genreSelected
      ) && (
        book.title.toLowerCase().includes(query.toLowerCase()) || book.author.name.toLowerCase().includes(query.toLowerCase())
      ) && (
        book.pages >= min && book.pages <= max
      )
    })
  }

  const onChangeQuery = (value: string) => {
    setQuery(value)
  }

  const onChangeGenre = (genre: string) => {
    setGenreSelected(genre)
  }

  const onChangeRange = (range: number[]) => {
    setRange(range)
  }

  useEffect(() => {
    if (genreSelected === 'todos') {
      window.history.pushState({}, '', `${window.location.pathname}`)
      return
    }
    const params = new URLSearchParams(window.location.search)
    params.set('genre', genreSelected)

    window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`)
  }, [genreSelected])

  const filters = {
    range,
    query,
    genreSelected,
    onChangeQuery,
    onChangeGenre,
    onChangeRange,
    filterBooks
  }

  return (
    <FilterContext.Provider value={filters}>
      {children}
    </FilterContext.Provider>
  )
}
