import React from 'react'
import ReactDOM from 'react-dom/client'
import { Suspense, lazy } from 'react'
const App = lazy(() => import('./App.jsx'))
import ContextProvider from './context/context.jsx'
import Loading from './components/Loading.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </ContextProvider>
  </React.StrictMode>
)
