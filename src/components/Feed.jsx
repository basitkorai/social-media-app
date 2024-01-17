import { useAppContext } from '../context/context'
import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import Post from './Post'

const Feed = () => {
  const { posts } = useAppContext()
  const { palette } = useTheme()
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
          padding: '0 0rem 1rem 0.5rem',
          marginInline: 'auto',
          background: palette.textGradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          maxWidth: 490,
          width: '95%',
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
