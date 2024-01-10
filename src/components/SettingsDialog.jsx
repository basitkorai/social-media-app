import {
  Avatar,
  Box,
  ButtonBase,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Modal,
  TextField,
  Typography,
} from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useAppContext } from '../context/context'
import { useState } from 'react'
import { useTheme } from '@emotion/react'
import { CheckBox } from '@mui/icons-material'

const SettingsDialog = () => {
  const { toggleSettingsModal, updateMode, updateTheme, isTheme, isMode } =
    useAppContext()
  const { palette } = useTheme()

  const handleClose = () => {
    toggleSettingsModal()
  }

  const changeTheme = (theme) => {
    updateTheme(theme)
  }
  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          boxSizing: 'border-box',
          backgroundColor: 'background.default',
          color: 'text.primary',
          marginInline: 'auto',
          marginBlock: 'auto',
          borderRadius: 5,
          padding: '2rem',
          paddingTop: '1rem',
          textAlign: 'center',
          width: { xs: '90%', sm: 600 },
          height: '70vh',
          position: 'relative',
          overflowY: 'auto',
          top: {
            xs: 10,
            sm: 100,
          },
        }}
      >
        <Typography variant="h6" component="h2">
          Settings
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">Choose Theme</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isTheme === 'redline'}
                    onChange={() => changeTheme('redline')}
                    name="redline"
                  />
                }
                label="Redline"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isTheme === 'bluevine'}
                    onChange={() => changeTheme('bluevine')}
                    name="bluevine"
                  />
                }
                label="Bluevine"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    onChange={() => updateMode()}
                    icon={<LightModeIcon />}
                    checkedIcon={<DarkModeIcon />}
                  />
                }
                label={isMode === 'dark' ? 'Dark mode' : 'Light Mode'}
              />
            </FormGroup>
          </FormControl>
        </Box>
      </Box>
    </Modal>
  )
}

export default SettingsDialog
