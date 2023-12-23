import React from 'react'
import Feed from '../components/Feed'
import Rightbar from '../components/Rightbar'
import Add from '../components/Add'

const Home = ({ sm }) => {
  return (
    <>
      <Feed />
      {sm && <Rightbar />}
      <Add biggerScreen={sm} />
    </>
  )
}

export default Home
