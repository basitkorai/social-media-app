import { Avatar, Box, ButtonBase, Typography } from '@mui/material'
import users from '../data/users'
import { useAppContext } from '../context/context'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@emotion/react'

const FollowerProfiles = () => {
  const navigate = useNavigate()
  const { isSelectedUser, selectUser, isMode } = useAppContext()
  const { user_id } = isSelectedUser
  const { palette } = useTheme()
  // console.log(palette)
  const handleGoToProfile = (user_id) => {
    selectUser(user_id, navigate)
  }
  return (
    <>
      {users.map((user, index) => {
        const { avatar, name } = user
        if (user.user_id !== user_id) {
          return (
            <ButtonBase
              onClick={() => {
                handleGoToProfile(user.user_id)
              }}
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: '1rem',
                width: {
                  xs: '100%',
                  md: 400,
                },
                padding: '0.5rem',
                borderRadius: '0.4rem',
                background: `${
                  isMode === 'light' ? palette.grey.A200 : 'auto'
                }`,
                color: `${palette.text.main}`,
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
        } else {
          return null
        }
      })}
    </>
  )
}

export default FollowerProfiles
