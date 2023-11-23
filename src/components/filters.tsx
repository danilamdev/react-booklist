import { useFilters } from '../hooks/useFilters'
import { RangeInput } from './range-input'

interface FilterProps {
  booksPages: { min: number, max: number }
  booksGenres: string[]
}

export function Filters ({ booksPages, booksGenres }: FilterProps) {
  const { genreSelected, range, onChangeRange, onChangeGenre } = useFilters()
  const [min, max] = range

  return (
    <>
      <div className='py-5 mt-5'>
        <h3 className='text-xl font-semibold border-b py-3 w-full mb-5'>Páginas</h3>
        <div className='flex justify-between text-xs py-2'>
          <span className='block text-black bg-white px-2 py-1 border rounded-lg'>{min}</span>
          <span className='block text-black bg-white px-2 py-1 border rounded-lg'>{max}</span>
        </div>
        <RangeInput
          onChangeRange={onChangeRange}
          booksPages={booksPages}
        />

       </div>

      <div className='flex flex-col justify-start items-start gap-y-2'>
        <h3 className='text-xl font-semibold border-b py-3 w-full mb-5'>Géneros</h3>
        {
          booksGenres.map(genre => {
            const isSelected = genreSelected === genre

            return <button
              key={genre}
              onClick={() => { onChangeGenre(genre) }}
              className={`text-sm mb-7  px-4 py-1 rounded-full ${isSelected ? 'bg-indigo-100 text-indigo-700' : 'bg-transparent text-slate-600'}`}>{genre}</button>
          }
          )
        }

      </div>
    </>
  )
}
