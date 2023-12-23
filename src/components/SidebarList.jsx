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
            <ListItem
              key={index}
              disablePadding
              sx={{ borderRadius: '1rem', overflow: 'hidden' }}
            >
              <ListItemButton>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <NavLink
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  to={link.link}
                >
                  {link.route}
                </NavLink>
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}

export default SidebarList
