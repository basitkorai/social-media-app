import { Link } from 'react-router-dom'
import socialRocketLogo from '../assets/images/socialrocket.svg'

const Logo = ({ dimensions, disabled }) => {
  return (
    <Link to={disabled ? '#' : '/'}>
      <img
        src={socialRocketLogo}
        alt="Social Rocket Logo"
        width={dimensions}
        height={dimensions}
      />
    </Link>
  )
}

export default Logo
