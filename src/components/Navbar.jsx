import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  styled,
  IconButton,
} from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import { Mail, Notifications } from '@mui/icons-material'
import { useState } from 'react'
import Logo from './Logo'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  paddingInline: '0.3rem',
  width: '40%',
  marginRight: '1rem',
  borderRadius: '8px',
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
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <AppBar sx={{ color: 'white', position: 'sticky', top: '0' }}>
      <StyledToolbar>
        <Logo dimensions={'34'} />
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
        <Icons>
          <Badge badgeContent={5} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={3} color="error">
            <Notifications />
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
