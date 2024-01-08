import React from 'react'
import FollowerProfiles from './FollowerProfile'
import { motion } from 'framer-motion'
import { Box, Button, ButtonBase, IconButton, Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/context'

const UserProfile = ({ name, avatar, isFollowing, admin }) => {
  const { setLightBoxImage, toggleLightbox, min600 } = useAppContext()
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate('/')
    updateSelectedTab(1)
  }
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      style={{ width: '100%', padding: '1rem' }}
    >
      <IconButton onClick={handleGoBack}>
        <ArrowBackIosIcon />
      </IconButton>
      <Box
        sx={{
          padding: '1rem',
          marginInline: 'auto',
          textAlign: 'center',
        }}
      >
        <ButtonBase
          component="div"
          disableRipple={min600}
          onClick={() => {
            setLightBoxImage([{ src: avatar, title: name }])
            toggleLightbox(true)
          }}
          sx={{
            borderRadius: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '.8rem',
            maxWidth: 'max-content',
            marginInline: 'auto',
          }}
        >
          <Box
            component={'img'}
            src={avatar}
            sx={{
              width: 150,
              height: 150,
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
          <Typography marginBlock={'.5rem'} variant="h5">
            {name}
          </Typography>
        </ButtonBase>
        {admin ? null : (
          <Button variant="contained">
            {isFollowing ? 'Message' : 'Follow'}
          </Button>
        )}
        <Box
          sx={{
            // marginTop: '2rem',
            display: 'grid',
            placeContent: min600 ? 'center' : 'unset',
            gap: '0.5rem',
          }}
        >
          <Typography sx={{ marginBlock: '2rem' }} variant="h5">
            Followers
          </Typography>
          <FollowerProfiles />
        </Box>
      </Box>
    </motion.div>
  )
}

export default UserProfile
