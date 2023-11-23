import { useState, useCallback } from 'react'
import { PAGES } from '../const'
import { type Pages } from '../types'

export function useTabs () {
  const [showPage, setShowPage] = useState<Pages>(PAGES.LIBRARY)

  const setActiveStyle = useCallback((showpage: Pages, buttonPage: Pages) => {
    if (showpage === buttonPage) return 'border-b border-slate-300 border-b-2 font-semibold'
    return ''
  }, [showPage])

  const ChangeView = {
    library: () => { setShowPage(PAGES.LIBRARY) },
    list: () => { setShowPage(PAGES.LIST) }
  }

  return { showPage, setActiveStyle, ChangeView }
}
