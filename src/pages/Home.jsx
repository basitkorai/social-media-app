import React from 'react'
import { Helmet } from 'react-helmet-async'
import Feed from '../components/Feed'
import Rightbar from '../components/Rightbar'
import Add from '../components/Add'

const Home = ({ md }) => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Social Rocket's Home Page" />
      </Helmet>
      <Feed />
      {md && <Rightbar />}
      <Add biggerScreen={md} />
    </>
  )
}

export default Home
