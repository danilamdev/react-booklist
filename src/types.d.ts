import { type PAGES, type BOOKS_STATUS } from './const'

export interface BooksAPI {
  library: Library[]
}

export type RLStatus = typeof BOOKS_STATUS[keyof typeof BOOKS_STATUS]

export type Pages = typeof PAGES[keyof typeof PAGES]

export interface Library {
  book: Book
}

export interface RLItem extends Book {
  status: RLStatus
}

export interface Book {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: Author
}

export interface Author {
  name: string
  otherBooks: string[]
}
