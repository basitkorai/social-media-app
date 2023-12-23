import CircularProgress from '@mui/material/CircularProgress'
import { useAppContext } from '../context/context'
import { Box } from '@mui/material'

const Loading = () => {
  const {
    state: { isMode },
  } = useAppContext()
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'grid',
        position: 'fixed',
        top: 0,
        placeContent: 'center',
        backgroundColor: isMode === 'dark' ? '#121212' : '#ffffff',
      }}
    >
      <CircularProgress sx={{ color: '#34d399' }} />
    </Box>
  )
}

export default Loading
