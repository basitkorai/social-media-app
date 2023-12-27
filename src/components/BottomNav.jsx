import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import BottomNavigationWrapper from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import StoreIcon from '@mui/icons-material/Store'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/context'

export default function BottomNavigation() {
  const { selectUser, isSelectedTab, updateSelectedTab } = useAppContext()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    const selectedTab = pathname.includes('/myprofile')
      ? 2
      : pathname === '/' ||
        pathname === '/login' ||
        pathname.includes('/profile')
      ? 1
      : 0
    updateSelectedTab(selectedTab)
  }, [pathname])
  const navigateTo = (url) => {
    navigate(url)
  }

  const goToMyProfile = () => {
    selectUser('2019', navigate, 'myprofile')
  }
  return (
    <Box sx={{ width: '100vw', position: 'fixed', bottom: 0, zIndex: 999 }}>
      <BottomNavigationWrapper
        value={isSelectedTab}
        onChange={(event, newValue) => {
          updateSelectedTab(newValue)
        }}
      >
        <BottomNavigationAction
          onClick={() => {
            navigateTo('/shop')
          }}
          label="Shop"
          icon={<StoreIcon />}
        />
        <BottomNavigationAction
          onClick={() => {
            navigateTo('/')
          }}
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          onClick={goToMyProfile}
          label="Me"
          icon={<PersonIcon />}
        />
      </BottomNavigationWrapper>
    </Box>
  )
}
