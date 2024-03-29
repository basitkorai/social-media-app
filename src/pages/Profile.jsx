import { Helmet } from 'react-helmet-async'
import { AnimatePresence } from 'framer-motion'
import { useAppContext } from '../context/context'
import UserProfile from '../components/UserProfile'

const Profile = () => {
  const { isSelectedUser } = useAppContext()
  window.scrollTo(0, 0)

  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="View Your Beautiful Profile." />
      </Helmet>
      <AnimatePresence>
        <UserProfile {...isSelectedUser} />
      </AnimatePresence>
    </>
  )
}

export default Profile
