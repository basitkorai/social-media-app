import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@emotion/react'
import { useAppContext } from '../context/context'
import searchUsersByName from '../utils/searchUsers'
import {
  Avatar,
  Box,
  ButtonBase,
  Modal,
  TextField,
  Typography,
} from '@mui/material'
import users from '../data/users'
import Emoji from 'react-emojis'

const SearchDialog = () => {
  const [searchString, setSearchString] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const navigate = useNavigate()
  const { toggleSearchModal, selectUser, isMode } = useAppContext()
  const { palette } = useTheme()

  const handleGoToProfile = (user_id) => {
    selectUser(user_id, navigate)
    toggleSearchModal()
  }

  const handleClose = () => {
    toggleSearchModal()
    setSearchResult([])
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
        <Box
          sx={{
            position: 'sticky',
            zIndex: '9999',
            top: -15,
            left: 16,
            right: 16,
            background: `${isMode === 'light' ? '#fff' : '#121212'}`,
            paddingBlock: '2rem',
          }}
        >
          <TextField
            fullWidth
            id="filled-search"
            label="Search"
            type="search"
            name="searchString"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            onKeyUp={(e) =>
              searchUsersByName(e.target.value, users, setSearchResult)
            }
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '1rem',
            flexDirection: 'column',
          }}
        >
          {searchResult.length > 0 ? (
            <>
              {searchResult.map((user, index) => {
                const { avatar, name, user_id } = user
                return (
                  <ButtonBase
                    onClick={() => {
                      handleGoToProfile(user_id)
                    }}
                    key={index}
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      gap: '1rem',
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '0.4rem',
                      background: `${
                        isMode === 'light' ? palette.grey.A200 : 'auto'
                      }`,
                      color: `${palette.text.main}`,
                    }}
                  >
                    <Avatar alt={name} src={avatar} />
                    <Box>
                      <Typography variant="h6" sx={{ fontSize: '.9rem' }}>
                        {name}
                      </Typography>
                    </Box>
                  </ButtonBase>
                )
              })}
            </>
          ) : (
            <>
              <Emoji emoji="pleading-face" size={50} />
              <Typography variant="h6" component="h1">
                No user found, try typing something.
              </Typography>
            </>
          )}
        </Box>
      </Box>
    </Modal>
  )
}

export default SearchDialog
