import { useState } from 'react'
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
import MobileSidebar from './components/MobileSidebar'
import Rightbar from './components/Rightbar'
import Feed from './components/Feed'
import { AnimatePresence } from 'framer-motion'
import Add from './components/Add'
import { useEffect } from 'react'
import Lightbox from './components/Lightbox'
import posts from './data/Posts'

const images = posts.map((image) => {
  const { user } = image
  return { src: user.avatar }
})

console.log(images)

const isThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches
let systemTheme = isThemeDark ? 'dark' : 'light'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMode, setIsMode] = useState(systemTheme)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isLightboxImage, setIsLightboxImage] = useState(null)

  const matches = useMediaQuery('(min-width: 600px)')
  const isThemeDark = useMediaQuery('(prefers-color-scheme: dark)')

  useEffect(() => {
    setIsMode(isThemeDark ? 'dark' : 'light')
  }, [isThemeDark])

  const toggleMode = () => {
    setIsMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  const theme = createTheme({
    palette: {
      mode: isMode,
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
        fontFamily="fantasy"
        sx={{
          margin: '0',
        }}
      >
        <Navbar setOpen={setIsSidebarOpen} open={isSidebarOpen} />
        <Stack direction="row" justifyContent="space-between">
          <AnimatePresence>
            {matches ? (
              <Sidebar isMode={isMode} toggleMode={toggleMode} />
            ) : isSidebarOpen ? (
              <MobileSidebar
                isMode={isMode}
                toggleMode={toggleMode}
                setOpen={setIsSidebarOpen}
              />
            ) : null}
          </AnimatePresence>
          <Feed
            toggleLightbox={setIsLightboxOpen}
            setImage={setIsLightboxImage}
          />
          {matches && <Rightbar />}
          {/* <Rightbar /> */}
        </Stack>
        <Add biggerScreen={matches} />
        {isLightboxOpen && (
          <Lightbox
            setIsOpen={setIsLightboxOpen}
            currentImage={isLightboxImage}
          />
        )}
      </Box>
    </ThemeProvider>
  )
}

export default App
