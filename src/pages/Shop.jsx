import { useEffect, useState } from 'react'
import { useAppContext } from '../context/context'
import axios from 'axios'
import Product from '../components/Product'
import { Box } from '@mui/material'

const Shop = () => {
  const { products, setProducts } = useAppContext()
  const [isError, setIsError] = useState({ error: false, message: '' })
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios('https://fakestoreapi.com/products')
        console.log(data)
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
    <Box
      flex={1}
      sx={{
        fontSize: '7rem',
        fontFamily: 'Inter, sans-serif',
        display: 'grid',
        justifyItems: 'center',
        gap: '1rem',
        paddingTop: '1rem',
        paddingBottom: '4rem',
      }}
    >
      {products.map((product, index) => {
        const { id } = product
        return <Product {...product} key={id} />
      })}
    </Box>
  )
}

export default Shop
