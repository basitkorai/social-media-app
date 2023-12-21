import { Box } from '@mui/material'
import Post from './Post'
import posts from '../data/Posts'

const Feed = ({ toggleLightbox, setImage }) => {
  return (
    <Box
      flex={4}
      sx={{
        paddingTop: '1rem',
      }}
    >
      {posts.map((post, index) => {
        return (
          <Post
            toggleLightbox={toggleLightbox}
            setImage={setImage}
            post={post}
            key={index}
          />
        )
      })}
    </Box>
  )
}

export default Feed
