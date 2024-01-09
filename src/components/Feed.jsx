import { Box, Typography } from '@mui/material'
import Post from './Post'
import { useAppContext } from '../context/context'

const Feed = () => {
  const { posts } = useAppContext()
  return (
    <Box
      flex={4}
      sx={{
        paddingTop: '1rem',
      }}
    >
      <Typography
        variant="h5"
        fontWeight={'bold'}
        sx={{
          padding: '0 1rem 1rem 1rem',
          background: '-webkit-linear-gradient(#ff416c, #ff4b2b)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        component={'h1'}
      >
        See what's happening on Social Rocket!
      </Typography>
      {posts.map((post, index) => {
        return <Post post={post} key={index} />
      })}
    </Box>
  )
}

export default Feed
