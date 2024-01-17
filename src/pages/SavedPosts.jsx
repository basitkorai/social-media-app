import { Helmet } from 'react-helmet-async'
import { useAppContext } from '../context/context'
import { Box as SavedPostsBox, Typography } from '@mui/material'
import Post from '../components/Post'
import NoMorePosts from '../components/NoMorePosts'

const SavedPosts = () => {
  const { posts } = useAppContext()
  const arrayOfSavedPosts = posts.filter((post) => post.is_saved)
  return (
    <>
      <Helmet>
        <title>Saved Posts</title>
        <meta name="description" content="Your saved posts here." />
      </Helmet>
      <SavedPostsBox
        flex={4}
        sx={{
          paddingTop: '1rem',
          height: arrayOfSavedPosts.length < 1 ? '90vh' : 'auto',
          width: '100%',
          display: 'grid',
        }}
      >
        <Typography
          variant="h5"
          fontWeight={'bold'}
          textAlign={'center'}
          marginBottom={'1rem'}
          component={'h1'}
        >
          Saved posts
        </Typography>
        {arrayOfSavedPosts.length >= 1 ? (
          <>
            {arrayOfSavedPosts.map((post, index) => {
              return <Post post={post} key={index} />
            })}
          </>
        ) : (
          <NoMorePosts />
        )}
      </SavedPostsBox>
    </>
  )
}

export default SavedPosts
