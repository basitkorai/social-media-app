import React from 'react'
import socialRocketLogo from '../assets/images/social-rocket.png'

const Logo = ({ dimensions }) => {
  return (
    <img
      src={socialRocketLogo}
      alt="Social Rocket Logo"
      width={dimensions}
      height={dimensions}
    />
  )
}

export default Logo
