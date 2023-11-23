import { type RLItem } from '../types'
import { TrashIcon } from '@radix-ui/react-icons'
import { useReadingList } from '../hooks/useReadingList'
import { FooterCard } from './footerCard'

export function ReadingListCard ({ book }: { book: RLItem }) {
  const { handleRemoveBook, handleStatus } = useReadingList()

  const onChangeStatus = () => {
    handleStatus(book.ISBN, book.status)
  }

  return (
    <article key={book.ISBN} className='grid grid-cols-[200px_1fr] h-min bg-white rounded-lg overflow-hidden relative max-w-2xl'>
      <button onClick={() => { handleRemoveBook(book.ISBN) }} className='absolute top-2 right-5 bg-rose-50 hover:bg-rose-100 rounded-full p-2 text-rose-300 hover:text-rose-400'>
        <TrashIcon />
      </button>

      <div className='w-[220px] aspect-[9/14] bg-gray-500'>
        <img src={book.cover} alt="imagen" className='w-full h-full' />
      </div>

      <div className='pt-10 pl-10 px-5 pb-4 flex flex-col'>
        <p className='text-slate-600'>{book.author.name} - {book.year}</p>
        <p className='text-2xl tracking-tight font-semibold mb-2 border-b pb-2 text-slate-700'>{book.title}</p>
        <p>{book.synopsis}</p>
        <span className='text-xs my-4 bg-green-50 text-green-500 rounded-full px-2 py-1 w-max'>{book.genre}</span>

        <FooterCard
          isbn={book.ISBN}
          status={book.status}
          onChangeStatus={onChangeStatus}
        />
      </div>

    </article>
  )
}
