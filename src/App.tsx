import { Filters } from './components/filters'
import { Tabs } from './components/tabs'
import { InputQuery } from './components/input-query'
import { Loading } from './components/loading'
import { AsideStats } from './components/asideStats'
import { BooksSection } from './components/booksSection'
import { useBooks } from './hooks/useBooks'
import { useTabs } from './hooks/useTabs'
import { useReadingList } from './hooks/useReadingList'

function App () {
  const { booksGenres, booksPages, filteredBooks, books, loading } = useBooks()
  const { ChangeView, showPage, setActiveStyle } = useTabs()
  const { state } = useReadingList()

  return (
    <>
     <header className="bg-stone-50 pt-20 mb-5">
      <InputQuery />
      <Tabs
        ChangeView={ChangeView}
        showPage={showPage}
        setActiveStyle={setActiveStyle}
      />
     </header>

     <main className="grid grid-cols-[250px_1fr] h-full w-full gap-16 px-10">
      <aside className="bg-stone-50/50 rounded-lg py-8 px-10 h-[1000px]">
        <AsideStats books={filteredBooks} readingList={state} />
        <Filters
          booksPages={booksPages}
          booksGenres={booksGenres}
        />
      </aside>

      {
        loading
          ? <Loading />
          : <BooksSection
              books={books}
              filteredBooks={filteredBooks}
              showPage={showPage}
            />
      }

     </main>

    </>
  )
}

export default App
