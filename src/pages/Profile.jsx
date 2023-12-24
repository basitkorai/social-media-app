import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { useAppContext } from '../context/context'
import UserProfile from '../components/UserProfile'

const Profile = () => {
  const { isSelectedUser } = useAppContext()
  window.scrollTo(0, 0)

  return (
    <AnimatePresence>
      {isSelectedUser ? (
        <UserProfile {...isSelectedUser} />
      ) : (
        <Typography variant="h3">No Profile Provided</Typography>
      )}
    </AnimatePresence>
  )
}

export default Profile
