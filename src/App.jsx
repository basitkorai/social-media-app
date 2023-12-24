import { useAppContext } from './context/context'
import Home from './pages/Home'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Friends from './pages/Friends'
import Shop from './pages/Shop'
import Groups from './pages/Groups'
import Pages from './pages/Pages'
import ThemeContextProvider from './context/ThemeContext'
import Profile from './pages/Profile'

function App() {
  const { min600 } = useAppContext()

  return (
    <ThemeContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home sm={min600} />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeContextProvider>
  )
}
export default App
