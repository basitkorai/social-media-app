import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Toolbar,
  styled,
  IconButton,
  useTheme,
} from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Notifications } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { Settings } from '@mui/icons-material'
import { useState } from 'react'
import Logo from './Logo'
import { useAppContext } from '../context/context'
import { useNavigate } from 'react-router-dom'
import { desktopMenuItems, mobileMenuItems } from '../data/navlinks'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const Icons = styled(Box)(({ theme }) => ({
  padding: '0 0.625rem',
  display: 'flex',
  gap: '0.5rem',
  marginLeft: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
}))

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {
    isMode,
    updateTheme,
    min900,
    isUserLoggedIn,
    setIsUserLoggedIn,
    toggleSearchModal,
  } = useAppContext()
  const { palette } = useTheme()
  const navigate = useNavigate()

  const iconColor = { color: palette.text.primary }

  const handleMenuItemClick = (route, logout) => {
    if (logout) {
      setIsUserLoggedIn(false)
      navigate('/login')
      setIsOpen(false)
    } else {
      navigate(`/${route}`)
      setIsOpen(false)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <AppBar sx={{ color: 'white', position: 'sticky', top: '0' }}>
      <StyledToolbar>
        <Logo dimensions={'34'} />
        <Icons>
          <IconButton onClick={() => toggleSearchModal()}>
            <SearchIcon />
          </IconButton>
          <IconButton sx={iconColor} onClick={() => updateTheme()}>
            {isMode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
          {isUserLoggedIn ? (
            <Avatar
              onClick={() => setIsOpen(true)}
              sx={{
                width: 30,
                height: 30,
                cursor: 'pointer',
              }}
              src="https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          ) : (
            <IconButton>
              <Settings />
            </IconButton>
          )}
        </Icons>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {min900
          ? desktopMenuItems.map((item, index) => {
              const { name, icon, route } = item
              return (
                <MenuItem
                  key={index}
                  onClick={() => {
                    if (route) {
                      handleMenuItemClick(route, false)
                    } else {
                      handleClose()
                    }
                  }}
                >
                  {icon}
                  {name}
                </MenuItem>
              )
            })
          : mobileMenuItems.map((item, index) => {
              const { name, icon, route } = item
              return (
                <MenuItem
                  key={index}
                  onClick={() => {
                    if (route) {
                      handleMenuItemClick(route, name === 'Logout')
                    } else {
                      handleClose()
                    }
                  }}
                >
                  {icon}
                  {name}
                </MenuItem>
              )
            })}
      </Menu>
    </AppBar>
  )
}

export default Navbar
