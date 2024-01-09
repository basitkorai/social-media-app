import { ListItem, ListItemButton, ListItemIcon, useTheme } from '@mui/material'
import { useAppContext } from '../context/context'
import { NavLink, useLocation } from 'react-router-dom'

const NavItem = ({ link, action }) => {
  const { isUserLoggedIn } = useAppContext()
  const { palette } = useTheme()
  const { pathname } = useLocation()

  const currentIcon = () => {
    if (pathname === link.link) {
      return link.activeIcon
    } else {
      return link.icon
    }
  }

  if (action) {
    return (
      <NavLink
        onClick={action}
        style={{
          color: palette.text.primary,
          textDecoration: 'none',
          fontFamily: 'Inter, sans-serif',
          padding: '0.5rem',
        }}
        to={isUserLoggedIn ? link.link : '#'}
      >
        <ListItem
          disablePadding
          sx={{ borderRadius: '1rem', overflow: 'hidden' }}
        >
          <ListItemButton>
            <ListItemIcon>{currentIcon()}</ListItemIcon>
            {link.route}
          </ListItemButton>
        </ListItem>
      </NavLink>
    )
  }
  return (
    <NavLink
      onClick={action}
      style={{
        color: palette.text.primary,
        textDecoration: 'none',
        fontFamily: 'Inter, sans-serif',
        padding: '0.5rem',
      }}
      to={isUserLoggedIn ? link.link : '#'}
    >
      <ListItem
        disablePadding
        sx={{ borderRadius: '1rem', overflow: 'hidden' }}
      >
        <ListItemButton>
          <ListItemIcon>{currentIcon()}</ListItemIcon>
          {link.route}
        </ListItemButton>
      </ListItem>
    </NavLink>
  )
}

export default NavItem
