import { Card } from '@mui/material'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './carousal.css'
import { latestposts } from '../../data/Posts'

const handleDragStart = (e) => e.preventDefault()
const posts = latestposts.map((post, index) => {
  return (
    <img
      key={index}
      className="carousel-image"
      src={post}
      onDragStart={handleDragStart}
      role="presentation"
    />
  )
})

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
        items={posts}
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
