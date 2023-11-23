import { BOOKS_STATUS } from '../const'
import { type Book, type RLStatus } from '../types'

interface Props {
  isbn: Book['ISBN']
  status: RLStatus
  onChangeStatus: () => void
}

export function FooterCard ({ isbn, status, onChangeStatus }: Props) {
  const statusStyle = {
    [BOOKS_STATUS.ready]: 'bg-yellow-50 text-yellow-600',
    [BOOKS_STATUS.started]: 'bg-sky-50 text-sky-600',
    [BOOKS_STATUS.finished]: 'bg-emerald-50 text-emerald-600'
  }

  return (
    <footer className='mt-auto flex justify-between items-center'>
        <small className='text-gray-400'>ISBN: {isbn}</small>
        <div className='text-xs space-x-2 flex items-center'>
          <span >Status: </span>
          <button
            onClick={onChangeStatus }
            className={` inline-flex tracking-tight items-center gap-x-2 px-2 rounded-full py-1 ${statusStyle[status]}`}>
              <span
                className={'bg-current rounded-full block w-[6px] h-[6px]'}>
              </span>{status}
          </button>
        </div>
      </footer>
  )
}
