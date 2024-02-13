import { BOOKS_STATUS } from '../const'
import { type Book, type RLStatus } from '../types'
import { getFromLocalStorage } from '../utils/getFromLocalStorage'

export interface ReadingListItem {
  isbn: Book['ISBN']
  status: RLStatus
}

type State = ReadingListItem[]

type RLActions =
  | { type: 'ADD_TO_RL', payload: { isbn: Book['ISBN'] } }
  | { type: 'REMOVE_FROM_RL', payload: { isbn: Book['ISBN'] } }
  | { type: 'CHANGE_STATUS', payload: { isbn: Book['ISBN'], status: RLStatus } }
  | { type: 'STORAGE_UPDATE', payload: { state: ReadingListItem[] } }
  | { type: 'CLEAR_RL' }

export const initialState: ReadingListItem[] = getFromLocalStorage('state')

export function readingListReducer (state: State, action: RLActions): State {
  if (action.type === 'ADD_TO_RL') {
    const { isbn } = action.payload

    const addedBook: ReadingListItem = {
      isbn,
      status: BOOKS_STATUS.ready
    }

    return [...state, addedBook]
  }

  if (action.type === 'REMOVE_FROM_RL') {
    const { isbn } = action.payload
    return state.filter(book => book.isbn !== isbn)
  }

  if (action.type === 'CHANGE_STATUS') {
    const { isbn, status } = action.payload

    const nextStatus = {
      [BOOKS_STATUS.ready]: BOOKS_STATUS.started,
      [BOOKS_STATUS.started]: BOOKS_STATUS.finished,
      [BOOKS_STATUS.finished]: BOOKS_STATUS.ready
    }

    return state.map(item => {
      if (item.isbn === isbn) {
        return {
          ...item,
          status: nextStatus[status]
        }
      }

      return item
    })
  }

  if (action.type === 'STORAGE_UPDATE') {
    const { state } = action.payload

    return state
  }

  if (action.type === 'CLEAR_RL') { return state }

  return state
}
