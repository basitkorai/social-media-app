import { useAppContext } from '../context/context'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Typography,
} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Box } from '@mui/system'

const Product = ({ image, title, description, id, price }) => {
  const { setLightBoxImage, toggleLightbox } = useAppContext()
  const handleProductClick = () => {
    setLightBoxImage([{ src: image, title: title }])
    toggleLightbox(true)
  }

  return (
    <Card sx={{ width: '95%', maxWidth: 345, fontSize: '1rem' }}>
      <CardActionArea>
        <CardMedia
          onClick={handleProductClick}
          component="img"
          height="140"
          image={image}
          alt={title}
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.slice(0, 100) + `${description.length > 100 && '...'}`}
        </Typography>
        <Box
          sx={{
            marginTop: '1rem',
            paddingInline: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Chip label={price} color="primary" />
          <IconButton color="primary" aria-label="add to shopping cart">
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  )
}

export default Product
