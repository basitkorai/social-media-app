import { Box, List } from '@mui/material'
import navlinks from '../data/navlinks'
import { useAppContext } from '../context/context'
import NavItem from './NavItem'

const SidebarList = () => {
  const { setIsUserLoggedIn } = useAppContext()

  const handleLogOut = () => {
    setIsUserLoggedIn(false)
  }
  return (
    <Box flex={1} p={2}>
      <List>
        {navlinks.map((link, index) => {
          if (link.route === 'Logout') {
            return <NavItem key={index} link={link} action={handleLogOut} />
          } else {
            return <NavItem key={index} link={link} />
          }
        })}
      </List>
    </Box>
  )
}

export default SidebarList
