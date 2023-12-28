import { useAppContext } from './context/context'
import Home from './pages/Home'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Friends from './pages/Friends'
import Shop from './pages/Shop'
import Groups from './pages/Groups'
import ThemeContextProvider from './context/ThemeContext'
import Profile from './pages/Profile'
import LogIn from './pages/LogIn'

function App() {
  const { min850 } = useAppContext()

  return (
    <ThemeContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home md={min850} />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/myprofile" element={<Profile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:user_id" element={<Profile />} />
            <Route path="/login" element={<LogIn />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeContextProvider>
  )
}
export default App
