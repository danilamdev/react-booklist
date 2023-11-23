import { PAGES } from '../const'
import { type Pages, type Library } from '../types'

import { ListOfBooks } from './list-of-books'
import { ReadingList } from './reading-list'

interface Props {
  showPage: Pages
  filteredBooks: Library[]
  books: Library[]
}

export function BooksSection ({ showPage, books, filteredBooks }: Props) {
  return (
    <div>
      { showPage === PAGES.LIBRARY && <ListOfBooks books={filteredBooks}/> }
      { showPage === PAGES.LIST && <ReadingList books={books} /> }
    </div>
  )
}
