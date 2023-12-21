import { Box } from '@mui/material'
import SidebarList from './SidebarList'
import Add from './Add'

const Sidebar = ({ isMode, toggleMode }) => {
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
        <SidebarList isMode={isMode} setMode={toggleMode} />
      </Box>
    </Box>
  )
}

export default Sidebar
