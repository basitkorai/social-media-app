import { ListItem, ListItemButton, ListItemIcon, useTheme } from '@mui/material'
import { useAppContext } from '../context/context'
import { NavLink } from 'react-router-dom'

const NavItem = ({ link, action }) => {
  const { isUserLoggedIn } = useAppContext()
  const { palette } = useTheme()

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
            <ListItemIcon>{link.icon}</ListItemIcon>
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
          <ListItemIcon>{link.icon}</ListItemIcon>
          {link.route}
        </ListItemButton>
      </ListItem>
    </NavLink>
  )
}

export default NavItem
