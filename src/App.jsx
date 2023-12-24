import { useAppContext } from './context/context'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Friends from './pages/Friends'
import Shop from './pages/Shop'
import Groups from './pages/Groups'
import Pages from './pages/Pages'
import ThemeContextProvider from './context/ThemeContext'

function App() {
  const { min600 } = useAppContext()

  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home sm={min600} />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/pages" element={<Pages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  )
}
export default App
