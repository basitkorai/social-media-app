import { Box, Card } from '@mui/material'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './carousal.css'
const posts = [
  'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
  'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
  'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
  'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
]

const handleDragStart = (e) => e.preventDefault()

const items = [
  <img
    className="carousel-image"
    src={posts[0]}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="carousel-image"
    src={posts[1]}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="carousel-image"
    src={posts[2]}
    onDragStart={handleDragStart}
    role="presentation"
  />,
]

const LatestPosts = () => {
  return (
    <Card
      variant="elevation"
      sx={{
        width: '95%',
        maxWidth: '20rem',
      }}
    >
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay={true}
        autoPlayInterval={1500}
        autoPlayDirection="ltr"
        infinite={true}
        keyboardNavigation={true}
      />
    </Card>
  )
}

export default LatestPosts
