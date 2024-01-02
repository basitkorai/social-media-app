import React from 'react'
import ReactDOM from 'react-dom/client'
import { Suspense, lazy } from 'react'
const App = lazy(() => import('./App.jsx'))
import ContextProvider from './context/context.jsx'
import Loading from './components/Loading.jsx'
import { HashRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ContextProvider>
        <HashRouter>
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        </HashRouter>
      </ContextProvider>
    </HelmetProvider>
  </React.StrictMode>
)
