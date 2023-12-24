import {
  Avatar,
  AvatarGroup,
  Box,
  Typography,
  Badge,
  styled,
} from '@mui/material'
import LatestPosts from './LatestPosts/LatestPosts'
import RecentConversations from './RecentConversations'
import users from '../data/users'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))

const StyledTypography = styled(Typography)(() => ({
  fontSize: '1.5rem',
  fontWeight: '500',
  fontFamily: 'inter',
  marginBottom: '1rem',
}))

const Rightbar = () => {
  return (
    <Box
      flex={2}
      paddingBlock={2}
      sx={{
        display: {
          xs: 'none',
          sm: 'block',
        },
        minWidth: '11rem',
      }}
    >
      <Box
        sx={{
          position: 'fixed',
        }}
      >
        <StyledTypography variant="h2">Active Now</StyledTypography>
        <AvatarGroup
          sx={{
            justifyContent: 'flex-end',
            marginBottom: '1rem',
            paddingLeft: '0.5rem',
          }}
          max={4}
        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/1484771/pexels-photo-1484771.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </StyledBadge>
          {users.map((user, index) => {
            const { user_id, name, avatar } = user
            return <Avatar key={user_id} alt={name} src={avatar} />
          })}
        </AvatarGroup>
        <StyledTypography variant="h2">Latest Posts</StyledTypography>
        <LatestPosts />
        <StyledTypography
          sx={{ marginTop: '1rem', marginBottom: '0' }}
          variant="h2"
        >
          Recent Conversation
        </StyledTypography>
        <RecentConversations />
      </Box>
    </Box>
  )
}

export default Rightbar
