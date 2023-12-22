import {
  Avatar,
  Box,
  Fab,
  Modal,
  Typography,
  Button,
  IconButton,
  TextField,
  Stack,
  ButtonGroup,
} from '@mui/material'
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material'
import { useState } from 'react'
import styled from '@emotion/styled'
import CancelIcon from '@mui/icons-material/Cancel'

const StyledModal = styled(Modal)({
  display: 'grid',
  justifyItems: 'center',
})
const UserBox = styled(Box)({
  display: 'flex',
  gap: '1rem',
  marginBlock: '1rem',
})

const Add = ({ biggerScreen }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  const handleClickAndClickAway = () => {
    setIsAddModalOpen(!isAddModalOpen)
  }
  return (
    <>
      <Fab
        onClick={handleClickAndClickAway}
        size={biggerScreen ? 'large' : 'medium'}
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', right: 30, bottom: { xs: 70, sm: 30 } }}
      >
        <AddIcon />
      </Fab>
      <StyledModal
        open={isAddModalOpen}
        onClose={handleClickAndClickAway}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          sx={{
            boxSizing: 'border-box',
            backgroundColor: 'background.default',
            color: 'text.primary',
            marginInline: 'auto',
            marginBlock: 'auto',
            borderRadius: 5,
            padding: '2rem',
            textAlign: 'center',
            width: { xs: '90%', sm: 400 },
            height: { xs: '70vh', sm: 'auto' },
            position: 'relative',
            outline: '1px solid skyblue',
          }}
        >
          <IconButton
            onClick={handleClickAndClickAway}
            sx={{ position: 'absolute', top: 5, right: 5 }}
            aria-label="delete"
            size={biggerScreen ? 'large' : 'medium'}
          >
            <CancelIcon color="error" fontSize="inherit" />
          </IconButton>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color={'grey'}
            fontWeight={'bold'}
          >
            Create a post
          </Typography>
          <UserBox>
            <Avatar
              onClick={() => setIsOpen(true)}
              sx={{ width: 30, height: 30, cursor: 'pointer' }}
              src="https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Typography fontWeight={500} variant="body1" component={'span'}>
              Sabrina Carpentar
            </Typography>
          </UserBox>
          <TextField
            sx={{
              width: '100%',
            }}
            id="outlined-multiline-static"
            label="What's on your mind?"
            multiline
            rows={4}
            color="info"
          />
          <Stack direction="row" gap={1} mt={2} mb={2}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="date"
            sx={{
              width: '100%',
            }}
          >
            <Button
              sx={{
                width: ' 100%',
              }}
            >
              Post
            </Button>
            <Button sx={{ width: 100 }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default Add
