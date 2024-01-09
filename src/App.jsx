import { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import ThemeContextProvider from './context/ThemeContext'
import { useAppContext } from './context/context'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Shop from './pages/Shop'
import Profile from './pages/Profile'
import LogIn from './pages/LogIn'
import Pages from './pages/Pages'
import SavedPosts from './pages/SavedPosts'
import UserProfile from './pages/UserProfile'

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
          <Route path="/followers" element={<UserProfile />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/saved_posts" element={<SavedPosts />} />
          <Route path="/myprofile" element={<UserProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:user_id" element={<Profile />} />
          <Route path="/login" element={<LogIn />} />
        </Route>
      </Routes>
    </ThemeContextProvider>
  )
}
export default App
