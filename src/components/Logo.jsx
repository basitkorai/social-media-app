import React from 'react'
import socialRocketLogo from '../assets/images/socialrocket.svg'
import { Link } from 'react-router-dom'

const Logo = ({ dimensions }) => {
  return (
    <Link to="/">
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
