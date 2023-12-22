import { Box } from '@mui/material'
import SidebarList from './SidebarList'

const Sidebar = () => {
  return (
    <Box
      sx={{
        minWidth: '13.113125rem',
        display: { xs: 'none', md: 'block' },
      }}
      flex={1.5}
    >
      <Box
        sx={{
          position: 'fixed',
        }}
      >
        <SidebarList />
      </Box>
    </Box>
  )
}

export default Sidebar
