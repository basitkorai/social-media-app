import { Avatar, Box, ButtonBase, Typography } from '@mui/material'
import users from '../data/users'
import { useAppContext } from '../context/context'

const FollowerProfiles = () => {
  const {
    isSelectedUser: { user_id },
  } = useAppContext()
  return (
    <>
      {users.map((user, index) => {
        const { avatar, name } = user
        if (user.user_id !== user_id) {
          return (
            <ButtonBase
              key={index}
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
      })}
    </>
  )
}

export default FollowerProfiles
