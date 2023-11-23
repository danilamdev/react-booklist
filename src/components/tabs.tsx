import { PAGES } from '../const'
import { type Pages } from '../types'

interface Props {
  ChangeView: { library: () => void, list: () => void }
  showPage: Pages
  setActiveStyle: (showpage: Pages, buttonPage: Pages) => string

}
export function Tabs ({ ChangeView, showPage, setActiveStyle }: Props) {
  // const [showPage, setShowPage] = useState<Pages>(PAGES.LIBRARY)
  // const {ChangeView, showPage, setActiveStyle} = useTabs()

  // const activeStyle = useCallback((showpage: Pages, buttonPage: Pages) => {
  //   if (showpage === buttonPage) return 'border-b border-slate-300 border-b-2 font-semibold'
  // }, [showPage])

  return (
    <div className='pt-10 space-x-10 w-max mx-auto'>
        <button
          onClick={() => { ChangeView.library() }}
          className={`${setActiveStyle(showPage, PAGES.LIBRARY)} px-5 pb-2 `}>Library
        </button>
        <button
          onClick={() => { ChangeView.list() }}
          className={`${setActiveStyle(showPage, PAGES.LIST)} px-5 pb-2`}>Reading list
        </button>
      </div>
  )
}
