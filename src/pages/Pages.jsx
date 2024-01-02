import { Box, Typography } from '@mui/material'
import pages from '../data/pages'
import Page from '../components/Page'

const Pages = () => {
  return (
    <Box
      flex={7}
      sx={{
        fontSize: '7rem',
        display: 'grid',
        justifyItems: 'center',
        padding: '1rem',
        gap: '1rem',
      }}
    >
      <Typography variant="h5" fontWeight={'bold'} component={'h1'}>
        Pages
      </Typography>
      {pages.map((page, index) => {
        return <Page key={index} {...page} />
      })}
    </Box>
  )
}

export default Pages
