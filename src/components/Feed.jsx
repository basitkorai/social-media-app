import { Box } from '@mui/material'
import Post from './Post'
import posts from '../data/Posts'

const Feed = () => {
  return (
    <Box
      flex={4}
      sx={{
        paddingTop: '1rem',
      }}
    >
      {posts.map((post, index) => {
        return <Post post={post} key={index} />
      })}
    </Box>
  )
}

export default Feed
