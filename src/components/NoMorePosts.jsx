import { Box, Typography } from '@mui/material'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import { useAppContext } from '../context/context'

const NoMorePosts = () => {
  const { isMode } = useAppContext()
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'grid',
        position: 'fixed',
        top: 0,
        justifyItems: 'center',
        placeContent: 'center',
        textAlign: 'center',
        backgroundColor: isMode === 'dark' ? '#121212' : '#ffffff',
      }}
    >
      <SentimentVeryDissatisfiedIcon
        sx={{ width: 80, height: 80, display: 'block' }}
      />
      <Typography variant="h5" component="h2">
        You don't have any saved posts
      </Typography>
    </Box>
  )
}

export default NoMorePosts
