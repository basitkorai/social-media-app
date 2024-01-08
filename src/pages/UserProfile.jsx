import React from 'react'
import { AnimatePresence } from 'framer-motion'
import MyProfile from '../components/UserProfile'
import { Helmet } from 'react-helmet-async'
import users from '../data/users'

const UserProfile = () => {
  window.scrollTo(0, 0)
  const currentUser = users[users.length - 1]

  return (
    <>
      <Helmet>
        <title>My Account</title>
        <meta name="description" content="View Your Beautiful Profile." />
      </Helmet>
      <AnimatePresence>
        <MyProfile {...currentUser} />
      </AnimatePresence>
    </>
  )
}

export default UserProfile
