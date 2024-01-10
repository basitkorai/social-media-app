import Home from '@mui/icons-material/Home'
import { HomeOutlined } from '@mui/icons-material'
import ArticleIcon from '@mui/icons-material/Article'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import PersonIcon from '@mui/icons-material/Person'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import StoreIcon from '@mui/icons-material/Store'
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import { Article, Logout } from '@mui/icons-material'
import { Bookmark } from '@mui/icons-material'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import { Settings } from '@mui/icons-material'
import AccountBoxIcon from '@mui/icons-material/AccountBox'

const menuIconStyles = { marginRight: '0.5rem' }

const navlinks = [
  {
    route: 'Home',
    link: '/',
    icon: <HomeOutlined color="primary" />,
    activeIcon: <Home color="primary" />,
  },
  {
    route: 'Pages',
    link: '/pages',
    icon: <ArticleOutlinedIcon color="primary" />,
    activeIcon: <ArticleIcon color="primary" />,
  },
  {
    route: 'Saved',
    link: '/saved_posts',
    icon: <BookmarkBorderOutlinedIcon color="primary" />,
    activeIcon: <Bookmark color="primary" />,
  },
  {
    route: 'Shop',
    link: '/shop',
    icon: <StoreOutlinedIcon color="primary" />,
    activeIcon: <StoreIcon color="primary" />,
  },
  {
    route: 'Followers',
    link: '/followers',
    icon: <PersonOutlinedIcon color="primary" />,
    activeIcon: <PersonIcon color="primary" />,
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
  { name: 'Settings', icon: <Settings sx={menuIconStyles} /> },
]

export { desktopMenuItems, mobileMenuItems, menuIconStyles }

export default navlinks
