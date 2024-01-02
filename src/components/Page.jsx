import { Avatar, Typography, ButtonBase, useTheme } from '@mui/material'
import { blueGrey } from '@mui/material/colors'

const Page = ({ avatar, page_name }) => {
  const { palette } = useTheme()

  return (
    <ButtonBase
      sx={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        width: {
          xs: '100%',
          sm: '80%',
        },
        justifyContent: 'flex-start',
        textAlign: 'left',
        padding: '1rem',
        background: palette.mode === 'dark' ? blueGrey[900] : blueGrey[50],
        borderRadius: '1rem',
        color: palette.text.primary,
      }}
    >
      <Avatar src={avatar} />
      <Typography
        variant="h6"
        component={'h2'}
        fontSize={'1rem'}
        display={'inline-block'}
      >
        {page_name}
      </Typography>
    </ButtonBase>
  )
}

export default Page
