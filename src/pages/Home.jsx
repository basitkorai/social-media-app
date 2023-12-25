import React from 'react'
import Feed from '../components/Feed'
import Rightbar from '../components/Rightbar'
import Add from '../components/Add'

const Home = ({ md }) => {
  return (
    <>
      <Feed />
      {md && <Rightbar />}
      <Add biggerScreen={md} />
    </>
  )
}

export default Home
