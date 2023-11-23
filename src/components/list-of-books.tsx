import { type Library } from '../types'

import { Book } from './book'

export function ListOfBooks ({ books }: { books: Library[] }) {
  return <section className="bg-white rounded-lg p-5 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-20">
  {
    books.map(({ book }) => (
     <Book book={book} key={book.ISBN}/>
    ))
  }
</section>
}
