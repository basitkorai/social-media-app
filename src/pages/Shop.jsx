import { useEffect, useState } from 'react'
import { useAppContext } from '../context/context'
import axios from 'axios'
import Product from '../components/Product'
import { Box } from '@mui/material'
import { Helmet } from 'react-helmet-async'

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
    return <h1>Loading...</h1>
  }
  if (isError.error) {
    return <h1>{isError.message}</h1>
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
        {products.map((product) => {
          const { id } = product
          return <Product {...product} key={id} />
        })}
      </Box>
    </>
  )
}

export default Shop
