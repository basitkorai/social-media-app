import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from '@mui/material'
import { useTheme } from '@mui/material'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import navlinks from '../data/navlinks'
import { useAppContext } from '../context/context'

const SidebarList = () => {
  const { selectUser } = useAppContext()
  const { palette } = useTheme()
  const { pathname } = useLocation()
  const isLoggedOut = pathname === '/login'
  const navigate = useNavigate()

  const handleClickFollowers = () => {
    selectUser('2019', navigate, '/myprofile')
  }

  return (
    <Box flex={1} p={2}>
      <List>
        {navlinks.map((link, index) => {
          if (link.route === '/followers') {
            return (
              <NavLink
                onClick={handleClickFollowers}
                key={index}
                style={{
                  color: palette.text.primary,
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  padding: '0.5rem',
                }}
                to={isLoggedOut ? '#' : link.link}
              >
                <ListItem
                  disablePadding
                  sx={{ borderRadius: '1rem', overflow: 'hidden' }}
                >
                  <ListItemButton>
                    <ListItemIcon>{link.icon}</ListItemIcon>
                    {link.route}
                  </ListItemButton>
                </ListItem>
              </NavLink>
            )
          } else {
            return (
              <NavLink
                key={index}
                style={{
                  color: palette.text.primary,
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  padding: '0.5rem',
                }}
                to={isLoggedOut ? '#' : link.link}
              >
                <ListItem
                  disablePadding
                  sx={{ borderRadius: '1rem', overflow: 'hidden' }}
                >
                  <ListItemButton>
                    <ListItemIcon>{link.icon}</ListItemIcon>
                    {link.route}
                  </ListItemButton>
                </ListItem>
              </NavLink>
            )
          }
        })}
      </List>
    </Box>
  )
}

export default SidebarList
