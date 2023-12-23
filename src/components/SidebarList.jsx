import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import ArticleIcon from '@mui/icons-material/Article'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import StoreIcon from '@mui/icons-material/Store'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'

const SidebarList = () => {
  return (
    <Box flex={1} p={2}>
      <List>
        <ListItem
          disablePadding
          sx={{ borderRadius: '1rem', overflow: 'hidden' }}
        >
          <ListItemButton component={'a'} href="#home">
            <ListItemIcon>
              <HomeIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{ borderRadius: '1rem', overflow: 'hidden' }}
        >
          <ListItemButton component={'a'} href="#pages">
            <ListItemIcon>
              <ArticleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{ borderRadius: '1rem', overflow: 'hidden' }}
        >
          <ListItemButton component={'a'} href="#groups">
            <ListItemIcon>
              <PeopleAltIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{ borderRadius: '1rem', overflow: 'hidden' }}
        >
          <ListItemButton component={'a'} href="#marketplace">
            <ListItemIcon>
              <StoreIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{ borderRadius: '1rem', overflow: 'hidden' }}
        >
          <ListItemButton component={'a'} href="#friends">
            <ListItemIcon>
              <PersonIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{ borderRadius: '1rem', overflow: 'hidden' }}
        >
          <ListItemButton component={'a'} href="#settings">
            <ListItemIcon>
              <SettingsIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{ borderRadius: '1rem', overflow: 'hidden' }}
        >
          <ListItemButton component={'a'} href="#logout">
            <ListItemIcon>
              <LogoutIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default SidebarList
