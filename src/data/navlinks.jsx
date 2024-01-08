import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import ArticleIcon from '@mui/icons-material/Article'
import StoreIcon from '@mui/icons-material/Store'
import LogoutIcon from '@mui/icons-material/Logout'
import { Article, Logout } from '@mui/icons-material'
import { Bookmark } from '@mui/icons-material'
import { Settings } from '@mui/icons-material'
import AccountBoxIcon from '@mui/icons-material/AccountBox'

const menuIconStyles = { marginRight: '0.5rem' }

const navlinks = [
  {
    route: 'Home',
    link: '/',
    icon: <HomeIcon color="primary" />,
  },
  {
    route: 'Pages',
    link: '/pages',
    icon: <ArticleIcon color="primary" />,
  },
  {
    route: 'Saved',
    link: '/saved_posts',
    icon: <Bookmark color="primary" />,
  },
  {
    route: 'Shop',
    link: '/shop',
    icon: <StoreIcon color="primary" />,
  },
  {
    route: 'Followers',
    link: '/followers',
    icon: <PersonIcon color="primary" />,
  },
  {
    route: 'Logout',
    link: '/login',
    icon: <LogoutIcon color="primary" />,
  },
]

const desktopMenuItems = [
  {
    name: 'Profile',
    route: 'myprofile',
    icon: <AccountBoxIcon sx={menuIconStyles} />,
  },
  { name: 'Settings', icon: <Settings sx={menuIconStyles} /> },
]

const mobileMenuItems = [
  {
    name: 'Pages',
    route: 'pages',
    icon: <Article sx={menuIconStyles} />,
  },
  {
    name: 'Saved posts',
    route: 'saved_posts',
    icon: <Bookmark sx={menuIconStyles} />,
  },
  {
    name: 'Logout',
    route: 'login',
    icon: <Logout sx={menuIconStyles} />,
  },
]

export { desktopMenuItems, mobileMenuItems }

export default navlinks
