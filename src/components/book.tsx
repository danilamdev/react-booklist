import { useReadingList } from '../hooks/useReadingList'
import { type Book as BookProps } from '../types'

export function Book ({ book }: { book: BookProps }) {
  const { handleAddBook, state, handleRemoveBook } = useReadingList()

  const checkbookInReadingList = (book: BookProps) => {
    return state.some(state => state.isbn === book.ISBN)
  }

  const isBookInReadingList = checkbookInReadingList(book)

  const handleClick = () => {
    isBookInReadingList
      ? handleRemoveBook(book.ISBN)
      : handleAddBook(book.ISBN)
  }

  return (
  <article key={book.ISBN} className='w-52 aspect-[12/27] group '>
    <div className='overflow-hidden relative w-full  aspect-[9/14] rounded-md shadow-lg'>
      <img src={book.cover} alt={`cover del libro ${book.title}`} className='w-full h-full object-cover group-hover:scale-105 transition-transform' />
      <div className='inset-0 absolute bg-gradient-to-b from-transparent to-black/30 group-hover:opacity-100 opacity-0 transition-opacity'></div>
    </div>

    <p className='text-md font-semibold truncate mt-3 text-stone-700'>{book.title}</p>
    <p className='text-stone-400 text-sm font-semibold pb-1 border-b mb-2'>{book.author.name}</p>

    <div className='flex justify-between items-center'>
      <small className='text-xs  tracking-tight'>{book.pages} páginas</small>
      <p className='text-xs bg-indigo-100 text-indigo-700 rounded-full px-2'>{book.year}</p>
    </div>

    <small className='text-gray-400'>{book.genre}</small>

    <button
      onClick={handleClick}
      className={`w-full text-xs  mt-5 block rounded py-2  ${isBookInReadingList ? 'bg-rose-200 text-rose-900 hover:bg-rose-300' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>{isBookInReadingList ? 'eliminar' : 'agregar'}</button>
  </article>
  )
}
