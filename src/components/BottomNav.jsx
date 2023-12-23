import { useState } from 'react'
import Box from '@mui/material/Box'
import BottomNavigationWrapper from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import StoreIcon from '@mui/icons-material/Store'
import { useNavigate } from 'react-router-dom'

export default function BottomNavigation() {
  const [value, setValue] = useState(1)
  const navigate = useNavigate()

  const navigateTo = (url) => {
    navigate(url)
  }

  return (
    <Box sx={{ width: '100vw', position: 'fixed', bottom: 0, zIndex: 999 }}>
      <BottomNavigationWrapper
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
        <BottomNavigationAction
          onClick={() => {
            navigateTo('/shop')
          }}
          label="Shop"
          icon={<StoreIcon />}
        />
        <BottomNavigationAction
          onClick={() => {
            navigateTo('/')
          }}
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          onClick={() => {
            navigateTo('/friends')
          }}
          label="Friends"
          icon={<PersonIcon />}
        />
      </BottomNavigationWrapper>
    </Box>
  )
}
