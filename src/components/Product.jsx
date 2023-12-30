import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from '@mui/material'
import { useAppContext } from '../context/context'

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
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.slice(0, 100) + `${description.length > 100 && '...'}`}
          </Typography>
          <Chip sx={{ marginTop: '1rem' }} label={price} color="success" />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Product
