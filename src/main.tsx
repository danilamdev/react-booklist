import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { FilterProvider } from './context/filters.tsx'
import { RLProvider } from './context/readingList.tsx'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <FilterProvider>
    <RLProvider>
      <App />
    </RLProvider>
  </FilterProvider>
)
