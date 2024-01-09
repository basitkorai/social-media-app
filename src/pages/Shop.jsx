import { useEffect, useState } from 'react'
import { useAppContext } from '../context/context'
import axios from 'axios'
import Product from '../components/Product'
import { Box, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import Loading from '../components/Loading'

const Shop = () => {
  const { products, setProducts } = useAppContext()
  const [isError, setIsError] = useState({ error: false, message: '' })
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios('https://fakestoreapi.com/products')
        setProducts(data)
      } catch (error) {
        setIsError({ error: true, message: error.message })
        console.log(error)
      }
    }
    fetchData()
  }, [])
  if (!products && !isError.error) {
    return <Loading />
  }
  return (
    <>
      <Helmet>
        <title>Shop</title>
        <meta
          name="description"
          content="Social Rocket Marketplace - a place to get what you are looking for."
        />
      </Helmet>
      <Box
        flex={7}
        sx={{
          fontSize: '7rem',
          fontFamily: 'Inter, sans-serif',
          display: 'grid',
          justifyItems: 'center',
          paddingTop: '1rem',
          gap: '1rem',
          gridTemplateColumns: {
            xs: '1fr',
            mb: '1fr 1fr',
            sm: '1fr 1fr 1fr',
            lg: '1fr 1fr 1fr 1fr',
            xl: '1fr 1fr 1fr 1fr 1fr',
          },
        }}
      >
        <Typography
          variant="h5"
          fontWeight={'bold'}
          textAlign={'center'}
          component={'h1'}
        >
          Shop
        </Typography>
        {isError.error ? (
          <h6>{isError.message}</h6>
        ) : (
          <>
            {products.map((product) => {
              const { id } = product
              return <Product {...product} key={id} />
            })}
          </>
        )}
      </Box>
    </>
  )
}

export default Shop
