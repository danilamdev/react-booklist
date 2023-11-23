import { useFilters } from '../hooks/useFilters'

export function InputQuery () {
  const { query, onChangeQuery } = useFilters()

  return (
    <div className="w-full max-w-3xl mx-auto px-10 text-stone-700 ">
      <h1 className="font-bold text-3xl mb-2">Explora los Libros</h1>
      <input
        type="text"
        placeholder="Busca libros por nombre o autor..."
        value={query}
        className="px-4 py-4 rounded w-full"
        onChange={e => { onChangeQuery(e.target.value) }}
      />
    </div>
  )
}
