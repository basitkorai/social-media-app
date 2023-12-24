import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  styled,
  IconButton,
  ClickAwayListener,
} from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Logout, Mail, Notifications } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { Settings } from '@mui/icons-material'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import { useState } from 'react'
import Logo from './Logo'
import { useAppContext } from '../context/context'

const menuIconStyles = { marginRight: '0.5rem' }
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  paddingInline: '0.3rem',
  width: '80%',
  borderRadius: '20px',
}))

const Icons = styled(Box)(({ theme }) => ({
  padding: '0 0.625rem',
  display: 'none',
  [theme.breakpoints.up('sm')]: { display: 'flex' },
  gap: '1.25rem',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '0.625rem',
  [theme.breakpoints.up('sm')]: { display: 'none' },
  alignItems: 'center',
}))

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { isMode, updateTheme } = useAppContext()

  const iconColor = { color: isMode === 'dark' ? '#34d399' : '#fff' }
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <AppBar sx={{ color: 'white', position: 'sticky', top: '0' }}>
      <StyledToolbar>
        <Logo dimensions={'34'} />
        <Box
          sx={{
            marginLeft: 'auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {isSearchOpen ? null : (
            <IconButton sx={iconColor} onClick={() => updateTheme()}>
              {isMode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          )}
          {isSearchOpen ? (
            <ClickAwayListener onClickAway={() => setIsSearchOpen(false)}>
              <Search>
                <InputBase
                  color="primary"
                  placeholder="Search"
                  variant="outlined"
                  sx={{
                    width: '100%',

                    '& input::placeholder': {
                      color: 'black',
                      padding: '1rem',
                    },
                  }}
                />
              </Search>
            </ClickAwayListener>
          ) : (
            <IconButton
              onClick={() => setIsSearchOpen(true)}
              sx={{ marginLeft: 'auto', marginRight: 1, ...iconColor }}
            >
              <SearchIcon />
            </IconButton>
          )}
        </Box>
        <Icons>
          <Badge badgeContent={3} color="error">
            <IconButton>
              <Notifications />
            </IconButton>
          </Badge>
          <Avatar
            onClick={() => setIsOpen(true)}
            sx={{ width: 30, height: 30, cursor: 'pointer' }}
            src="https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </Icons>
        <UserBox>
          <Avatar
            onClick={() => setIsOpen(true)}
            sx={{ width: 30, height: 30, cursor: 'pointer' }}
            src="https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </UserBox>
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
        <MenuItem onClick={handleClose}>
          <AccountBoxIcon sx={menuIconStyles} />
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Settings sx={menuIconStyles} />
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Logout sx={menuIconStyles} />
          Logout
        </MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
