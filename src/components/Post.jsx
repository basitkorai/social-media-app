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
import { Checkbox } from '@mui/material'
import sound from '../assets/sounds/like-sound.mp3'

const likeSound = new Audio(sound)
const Post = ({ post }) => {
  const { post_date, post_image, text, user } = post
  return (
    <Card
      sx={{
        maxWidth: 500,
        width: '90%',
        marginBottom: '1rem',
        marginInline: 'auto',
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ width: 30, height: 30, cursor: 'pointer' }}
            src={user.avatar}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={user.name}
        subheader={post_date}
      />
      <CardMedia component="img" height="194" image={post_image} alt={text} />
      <CardContent>
        <Typography variant="body2" color="whitespace">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton disableRipple aria-label="add to favorites">
          <Checkbox
            onChange={(e) => {
              if (e.target.checked) likeSound.play()
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
