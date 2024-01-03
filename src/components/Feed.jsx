import { Box } from '@mui/material'
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
      {posts.map((post, index) => {
        return <Post post={post} key={index} />
      })}
    </Box>
  )
}

export default Feed
