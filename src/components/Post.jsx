import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Bookmark, BookmarkBorder, FavoriteBorder } from '@mui/icons-material'
import { CardActionArea, Checkbox } from '@mui/material'
import sound from '../assets/sounds/like-sound.mp3'
import { useAppContext } from '../context/context'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const likeSound = new Audio(sound)
const Post = ({ post }) => {
  const [isChecked, setIsChecked] = useState(post.is_liked)
  const { toggleLightbox, setLightBoxImage, selectUser, posts, likePost } =
    useAppContext()
  const navigate = useNavigate()
  const { post_id, post_date, post_image, text, user, is_liked } = post
  const { user_id, name } = user

  const handleGoToProfile = () => {
    selectUser(user_id, navigate)
  }

  const handleLikePost = (post_id) => {
    likePost(posts, post_id)
  }

  return (
    <Card
      sx={{
        maxWidth: 500,
        width: '95%',
        marginBottom: '1rem',
        marginInline: 'auto',
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            onClick={handleGoToProfile}
            sx={{ width: 30, height: 30, cursor: 'pointer' }}
            src={user.avatar}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<span onClick={handleGoToProfile}>{user.name}</span>}
        subheader={post_date}
      />
      <CardActionArea sx={{ overflow: 'hidden' }}>
        <CardMedia
          onClick={() => {
            setLightBoxImage([{ src: post_image, title: name }])
            toggleLightbox(true)
          }}
          sx={{
            objectFit: 'cover',
            '&:hover': {
              cursor: 'pointer',
              transform: 'scale(1.1)',
              transition: '500ms ease-in-out',
            },
          }}
          component="img"
          height="194"
          image={post_image}
          alt={text}
        />
      </CardActionArea>
      <CardContent>
        <Typography variant="body2" color="whitespace">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton disableRipple aria-label="add to favorites">
          <Checkbox
            checked={isChecked}
            onChange={(e) => {
              if (e.target.checked) likeSound.play()
              setIsChecked(e.target.checked)
              handleLikePost(post_id)
            }}
            color="error"
            icon={<FavoriteBorder />}
            checkedIcon={<FavoriteIcon />}
          />
        </IconButton>

        <IconButton disableRipple aria-label="share">
          <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Post
