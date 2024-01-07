import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import ArticleIcon from '@mui/icons-material/Article'
import StoreIcon from '@mui/icons-material/Store'
import LogoutIcon from '@mui/icons-material/Logout'
import { Bookmark } from '@mui/icons-material'

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

export default navlinks
