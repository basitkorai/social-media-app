import Navbar from '../components/Navbar'
import { Box, Stack } from '@mui/material'
import Sidebar from '../components/Sidebar'
import BottomNavigation from '../components/BottomNav'
import Lightbox from '../components/Lightbox'
import { useAppContext } from '../context/context'
import { Outlet } from 'react-router-dom'
import SearchDialog from '../components/SearchDialog'

const Layout = () => {
  const { isLightboxOpen, isSearchModalOpen, min900 } = useAppContext()
  return (
    <>
      <Box
        bgcolor="background.default"
        color="text.primary"
        sx={{
          margin: '0',
          paddingBottom: '4rem',
        }}
      >
        <Navbar />
        <Stack direction="row" justifyContent="space-between">
          {min900 ? <Sidebar /> : <BottomNavigation />}
          <Outlet />
        </Stack>
        {isLightboxOpen && <Lightbox />}
        {isSearchModalOpen && <SearchDialog />}
      </Box>
    </>
  )
}

export default Layout
