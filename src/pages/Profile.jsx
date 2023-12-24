import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  IconButton,
  Typography,
} from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useAppContext } from '../context/context'
import { useNavigate } from 'react-router-dom'
import users from '../data/users'

const Profile = () => {
  const { isSelectedUser, setLightBoxImage, toggleLightbox, min600 } =
    useAppContext()
  const navigate = useNavigate()
  const { user_id, name, avatar, isFollowing } = isSelectedUser
  window.scrollTo(0, 0)
  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <AnimatePresence>
      {isSelectedUser && (
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
                setLightBoxImage([{ src: avatar }])
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
            <Button variant="contained">
              {isFollowing ? 'Message' : 'Follow'}
            </Button>
            <Box sx={{ marginTop: '2rem' }}>
              {users.map((user, index) => {
                if (user.user_id !== user_id) {
                  return <FollowerProfile key={index} {...user} />
                }
              })}
            </Box>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const FollowerProfile = ({ name, avatar }) => {
  return (
    <ButtonBase
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        gap: '1rem',
        marginBottom: '0.3rem',
        width: '100%',
        padding: '0.5rem',
        borderRadius: '0.4rem',
      }}
    >
      <Avatar alt={name} src={avatar} />
      <Box>
        <Typography variant="h6" sx={{ fontSize: '.9rem' }}>
          {name}
        </Typography>
      </Box>
    </ButtonBase>
  )
}

export default Profile
