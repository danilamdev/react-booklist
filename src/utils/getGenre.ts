import { GENRES } from '../const'
import { type Filters } from '../context/filters'

export function getGenreFromUrl () {
  const params = new URLSearchParams(window.location.search)
  const genre = params.get('genre') as Filters['genreSelected']

  if (genre == null) return GENRES.TODOS

  return genre
}
