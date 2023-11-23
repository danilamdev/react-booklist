import { createContext, useEffect } from 'react'
import { type RLStatus } from '../types'
import { type ReadingListItem } from '../reducers/readingList'
import { useReadingListReducer } from '../hooks/useReadingListReducer'

type RLContext = {
  state: ReadingListItem[]
  handleAddBook: (isbn: string) => void
  handleRemoveBook: (isbn: string) => void
  handleStatus: (isbn: string, status: RLStatus) => void
}

export const readingListContext = createContext<RLContext | null>(null)

export function RLProvider ({ children }: { children: React.ReactNode }) {
  const { handleAddBook, handleRemoveBook, handleStatus, state, handleStorageUpdate } = useReadingListReducer()

  useEffect(() => {
    // guardar el estado en local storage
    window.localStorage.setItem('state', JSON.stringify(state))

    // sincronizando el estado entre pestañas
    const onChangeLocalStorage = (event: StorageEvent) => {
      if (event.key === 'state' && event.newValue !== null) {
        const newState = JSON.parse(event.newValue) as ReadingListItem[]

        handleStorageUpdate(newState)
      }
    }

    window.addEventListener('storage', onChangeLocalStorage)

    return () => { window.removeEventListener('storage', onChangeLocalStorage) }
  }, [state])

  return (
    <readingListContext.Provider value={ { state, handleAddBook, handleRemoveBook, handleStatus }}>
      {children}
    </readingListContext.Provider>
  )
}
