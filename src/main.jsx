import React from 'react'
import ReactDOM from 'react-dom/client'
import { Suspense, lazy } from 'react'
const App = lazy(() => import('./App.jsx'))
import ContextProvider from './context/context.jsx'
import Loading from './components/Loading.jsx'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <HashRouter>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </HashRouter>
    </ContextProvider>
  </React.StrictMode>
)
