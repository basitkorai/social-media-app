import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

import { Link, NavLink } from 'react-router-dom'
import navlinks from '../data/navlinks'

const SidebarList = () => {
  return (
    <Box flex={1} p={2}>
      <List>
        {navlinks.map((link, index) => {
          return (
            <NavLink
              style={{
                color: 'white',
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
                padding: '0.5rem',
              }}
              to={link.link}
            >
              <ListItem
                key={index}
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
        })}
      </List>
    </Box>
  )
}

export default SidebarList
