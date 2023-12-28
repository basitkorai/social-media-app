import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import ArticleIcon from '@mui/icons-material/Article'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import StoreIcon from '@mui/icons-material/Store'
import LogoutIcon from '@mui/icons-material/Logout'

const navlinks = [
  {
    route: 'Home',
    link: '/',
    icon: <HomeIcon color="primary" />,
  },
  {
    route: 'Groups',
    link: '/groups',
    icon: <PeopleAltIcon color="primary" />,
  },
  {
    route: 'Shop',
    link: '/shop',
    icon: <StoreIcon color="primary" />,
  },
  {
    route: 'Friends',
    link: '/friends',
    icon: <PersonIcon color="primary" />,
  },
  {
    route: 'Logout',
    link: '/login',
    icon: <LogoutIcon color="primary" />,
  },
]

export default navlinks
