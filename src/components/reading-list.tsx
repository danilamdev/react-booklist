import { useMemo } from 'react'
import { useReadingList } from '../hooks/useReadingList'
import type { Library, RLItem } from '../types'
import { ReadingListCard } from './reading-list-card'
import { BooksIcon } from './icons'

export function ReadingList ({ books }: { books: Library[] }) {
  const { state } = useReadingList()

  const readingListItems = useMemo(() => {
    const readingList = books.reduce<RLItem[]>((items, { book }) => {
      const findBook = state.findIndex(item => item.isbn === book.ISBN)
      if (findBook >= 0) {
        items.push({ ...book, status: state[findBook].status })
      }
      return items
    }, [])

    return readingList
  }, [books, state])

  return (
    <section className='px-10 py-5 grid grid-cols-[repeat(auto-fit,minmax(600px,1fr))] gap-x-5 gap-y-5 bg-stone-50 h-min min-h-[800px] rounded-lg'>
      {
        state.length === 0 && <BooksIcon />
      }
      {
        readingListItems.map((book) => (
          <ReadingListCard
            key={book.ISBN}
            book={book}
          />
        ))
      }
    </section>

  )
}
