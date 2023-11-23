import { useReducer } from 'react'
import { readingListReducer, initialState, type ReadingListItem } from '../reducers/readingList'
import { type RLStatus } from '../types'

export function useReadingListReducer () {
  const [state, dispatch] = useReducer(readingListReducer, initialState)

  const handleAddBook = (isbn: string) => {
    dispatch({ type: 'ADD_TO_RL', payload: { isbn } })
  }

  const handleRemoveBook = (isbn: string) => {
    dispatch({ type: 'REMOVE_FROM_RL', payload: { isbn } })
  }

  const handleStatus = (isbn: string, status: RLStatus) => {
    dispatch({ type: 'CHANGE_STATUS', payload: { isbn, status } })
  }

  const handleStorageUpdate = (state: ReadingListItem[]) => {
    dispatch({ type: 'STORAGE_UPDATE', payload: { state } })
  }

  return {
    state,
    handleAddBook,
    handleRemoveBook,
    handleStatus,
    handleStorageUpdate
  }
}
