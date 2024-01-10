import {
  createTheme,
  ThemeProvider as ThemeProviderMUI,
  useTheme,
} from '@mui/material'
import { createContext, useContext } from 'react'
import { useAppContext } from './context'
import { chooseTheme } from '../data/themes'

const ThemeContext = createContext()
const ThemeContextProvider = ({ children }) => {
  const { isMode, isTheme } = useAppContext()
  const chosenTheme = chooseTheme(isTheme)
  const muiTheme = useTheme()
  const customTheme = createTheme({
    palette: {
      mode: isMode,
      ...chosenTheme,
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
