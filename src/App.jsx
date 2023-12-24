import { useAppContext } from './context/context'
import {
  ThemeProvider,
  createTheme,
  Box,
  useMediaQuery,
  Button,
} from '@mui/material'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Friends from './pages/Friends'
import Shop from './pages/Shop'
import Groups from './pages/Groups'
import Pages from './pages/Pages'

function App() {
  const { isMode, min600 } = useAppContext()

  const theme = createTheme({
    palette: {
      mode: isMode,
      primary: {
        main: '#34d399',
        dark: '#F6AE2D',
      },
    },
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}
export default App
