import { useContext } from 'react'
import { FilterContext } from '../context/filters'

export function useFilters () {
  const filters = useContext(FilterContext)

  if (filters === null) throw new Error('no se proporciono ningun contexto')

  return filters
}
