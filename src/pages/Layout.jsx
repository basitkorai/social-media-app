import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Stack, useMediaQuery } from '@mui/material'
import Sidebar from '../components/Sidebar'
import BottomNavigation from '../components/BottomNav'
import Lightbox from '../components/Lightbox'
import { useAppContext } from '../context/context'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const { isMode, isLightboxOpen } = useAppContext()
  const matches = useMediaQuery('(min-width: 600px)')
  return (
    <>
      <Box
        bgcolor="background.default"
        color="text.primary"
        sx={{
          margin: '0',
        }}
      >
        <Navbar />
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ outline: '2px solid yellow' }}
        >
          {matches ? <Sidebar /> : <BottomNavigation />}
          <Outlet />
        </Stack>
        {isLightboxOpen && <Lightbox />}
      </Box>
    </>
  )
}

export default Layout
