import CircularProgress from '@mui/material/CircularProgress'
import { useAppContext } from '../context/context'
import { Box } from '@mui/material'

const Loading = () => {
  const { isMode, isTheme } = useAppContext()
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
      <CircularProgress
        sx={{ color: isTheme === 'redline' ? '#ff416c' : '#00CCFF' }}
      />
    </Box>
  )
}

export default Loading
