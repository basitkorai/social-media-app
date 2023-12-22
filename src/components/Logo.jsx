import React from 'react'
import socialRocketLogo from '../assets/images/socialrocket.svg'

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
