import { motion } from 'framer-motion'
import { ClickAwayListener } from '@mui/base'
import SidebarList from './SidebarList'
import { useState } from 'react'
import { Box } from '@mui/material'
import { useAppContext } from '../context/context'

const MobileSidebar = ({ open, setOpen }) => {
  const [bgColor, setBgColor] = useState('light')
  const { triggerDrawer } = useAppContext()
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        zIndex: 99999,
        p: 2,
        // backgroundColor: ``,
        // backgroundColor: `${
        //   bgColor === 'light' ? 'transparent' : 'hsla(0, 0%, 0%, 0.5)'
        // }`,
        width: '100vw',
        height: '100vh',
      }}
      initial={{ x: -500 }}
      animate={{
        x: 0,
      }}
      exit={{ x: -500 }}
      onAnimationComplete={() => setBgColor('dark')}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <ClickAwayListener
        onClickAway={() => {
          triggerDrawer(false)
        }}
      >
        <Box
          style={{
            backgroundColor: 'background.default',
            color: 'text.primary',
            width: '80%',
            height: '100vh',
          }}
        >
          <SidebarList />
        </Box>
      </ClickAwayListener>
    </motion.div>
  )
}

export default MobileSidebar
