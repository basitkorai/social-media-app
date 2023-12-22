import * as React from 'react'
import Box from '@mui/material/Box'
import BottomNavigationWrapper from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import StoreIcon from '@mui/icons-material/Store'

export default function BottomNavigation() {
  const [value, setValue] = React.useState(1)

  return (
    <Box sx={{ width: '100vw', position: 'fixed', bottom: 0, zIndex: 999 }}>
      <BottomNavigationWrapper
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
        <BottomNavigationAction label="Shop" icon={<StoreIcon />} />
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Friends" icon={<PersonIcon />} />
      </BottomNavigationWrapper>
    </Box>
  )
}
