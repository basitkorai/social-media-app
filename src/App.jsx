import { useAppContext } from './context/context'
import {
  ThemeProvider,
  createTheme,
  Box,
  useMediaQuery,
  Button,
} from '@mui/material'
import Stack from '@mui/material/Stack'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import Feed from './components/Feed'
import { AnimatePresence } from 'framer-motion'
import Add from './components/Add'
import { useEffect } from 'react'
import Lightbox from './components/Lightbox'
import BottomNavigation from './components/BottomNav'

function App() {
  const {
    state: { isMode, isLightboxOpen },
  } = useAppContext()
  const matches = useMediaQuery('(min-width: 600px)')
  const isThemeDark = useMediaQuery('(prefers-color-scheme: dark)')

  // useEffect(() => {
  //   updateTheme()
  // }, [isThemeDark])

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
      <Box
        bgcolor="background.default"
        color="text.primary"
        sx={{
          margin: '0',
        }}
      >
        <Navbar />
        <Stack direction="row" justifyContent="space-between">
          <AnimatePresence>
            {matches ? <Sidebar /> : <BottomNavigation />}
          </AnimatePresence>
          <Feed />
          {matches && <Rightbar />}
        </Stack>
        <Add biggerScreen={matches} />
        {isLightboxOpen && <Lightbox />}
      </Box>
    </ThemeProvider>
  )
}
export default App
