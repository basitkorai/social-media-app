import { useAppContext } from './context/context'
import Home from './pages/Home'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Layout from './pages/Layout'
import Friends from './pages/Friends'
import Shop from './pages/Shop'
import Groups from './pages/Groups'
import ThemeContextProvider from './context/ThemeContext'
import Profile from './pages/Profile'
import LogIn from './pages/LogIn'
import { useEffect } from 'react'

function App() {
  const { isUserLoggedIn, min850 } = useAppContext()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate('/login')
    }
  }, [pathname])

  return (
    <ThemeContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home md={min850} />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/followers" element={<Profile />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/myprofile" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:user_id" element={<Profile />} />
          <Route path="/login" element={<LogIn />} />
        </Route>
      </Routes>
    </ThemeContextProvider>
  )
}
export default App
