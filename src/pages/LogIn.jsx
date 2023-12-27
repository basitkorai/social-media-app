import { Box, Button, Grid } from '@mui/material'
import Logo from '../components/Logo.jsx'
import { useAppContext } from '../context/context.jsx'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
  const navigate = useNavigate()

  const handleLogIn = () => {
    navigate('/')
  }
  return (
    <Box
      sx={{
        height: '90vh',
        width: '100%',
        display: 'grid',
        placeContent: 'center',
      }}
    >
      <Box
        sx={{
          // background: 'pink',
          width: 200,
          height: 200,
          display: 'grid',
          placeContent: 'center',
          marginInline: 'auto',
        }}
      >
        <Logo dimensions={100} disabled={true} />
        <Button
          sx={{ marginBlock: '1rem' }}
          variant="contained"
          onClick={handleLogIn}
        >
          Log in
        </Button>
      </Box>
    </Box>
  )
}

export default LogIn
