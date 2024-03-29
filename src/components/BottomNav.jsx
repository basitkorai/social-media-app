import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/context'
import Box from '@mui/material/Box'
import BottomNavigationWrapper from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import StoreIcon from '@mui/icons-material/Store'
import { Avatar, useTheme } from '@mui/material'

export default function BottomNavigation() {
  const { selectUser, isSelectedTab, updateSelectedTab, isUserLoggedIn } =
    useAppContext()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { palette } = useTheme()

  useEffect(() => {
    const selectedTab = pathname.includes('/myprofile')
      ? 2
      : pathname === '/' ||
        pathname === '/login' ||
        pathname.includes('/profile') ||
        pathname === '/pages' ||
        pathname === '/saved_posts'
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
            if (isUserLoggedIn) {
              navigateTo('/shop')
            }
          }}
          label="Shop"
          icon={<StoreIcon />}
        />
        <BottomNavigationAction
          onClick={() => {
            if (isUserLoggedIn) {
              navigateTo('/')
            }
          }}
          label={pathname === '/' ? 'Home' : 'Go Home'}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          onClick={() => {
            if (isUserLoggedIn) {
              goToMyProfile()
            }
          }}
          label="You"
          icon={
            <Avatar
              sx={{
                width: 25,
                height: 25,
                cursor: 'pointer',
                marginBottom: '0.1rem',
                outline: `${isSelectedTab === 2 ? '2px' : '0px'} solid ${
                  palette.primary.main
                }`,
              }}
              src="https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          }
        />
      </BottomNavigationWrapper>
    </Box>
  )
}
