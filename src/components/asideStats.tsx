import { type ReadingListItem } from '../reducers/readingList'
import { type Library } from '../types'

interface Props {
  books: Library[]
  readingList: ReadingListItem[]
}

export function AsideStats ({ books, readingList }: Props) {
  return (
    <div>
      <small className='border-b pb-2 mb-4  flex items-center justify-between'>libros disponibles: <strong className='text-slate-600 '>{books.length}</strong></small>
      <small className='border-b pb-2 mb-4  flex items-center justify-between'>lista de lectura<strong className='text-slate-600 '>{readingList.length}</strong></small>
    </div>
  )
}
