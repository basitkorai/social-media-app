import {
  createTheme,
  ThemeProvider as ThemeProviderMUI,
  useTheme,
} from '@mui/material'
import { createContext, useContext } from 'react'
import { useAppContext } from './context'

const ThemeContext = createContext()
const ThemeContextProvider = ({ children }) => {
  const { isMode } = useAppContext()
  const muiTheme = useTheme()
  const customTheme = createTheme({
    palette: {
      mode: isMode,
      primary: {
        main: '#34d399',
        dark: '#F6AE2D',
      },
    },
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
    },
    breakpoints: {
      values: {
        xs: 0,
        mb: 450,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  })
  return (
    <ThemeContext.Provider value={{ ...muiTheme }}>
      <ThemeProviderMUI theme={customTheme}>{children}</ThemeProviderMUI>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  return useContext(ThemeContext)
}

export default ThemeContextProvider
