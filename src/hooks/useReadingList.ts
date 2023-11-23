import { useContext } from 'react'
import { readingListContext } from '../context/readingList'

export function useReadingList () {
  const context = useContext(readingListContext)

  if (context == null) throw new Error('no hay provisto un contexto para reading list')

  return context
}
