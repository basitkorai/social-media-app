import { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'
const AppContext = createContext()

const isThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches
let systemTheme = isThemeDark ? 'dark' : 'light'

const initialState = {
  isMode: systemTheme,
  isDrawerOpen: false,
  isLightboxOpen: false,
  isLightboxImage: null,
}
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const updateTheme = () => {
    const mode = state.isMode === 'light' ? 'dark' : 'light'
    try {
      dispatch({
        type: 'UPDATE_THEME',
        payload: mode,
      })
    } catch (error) {
      console.log(error)
    }
  }
  const setLightBoxImage = (url) => {
    dispatch({
      type: 'SET_LIGHTBOX_IMAGE',
      payload: url,
    })
  }
  const toggleLightbox = (lightboxState) => {
    dispatch({
      type: 'TOGGLE_LIGHTBOX',
      payload: lightboxState,
    })
  }

  const appState = {
    state,
    updateTheme,
    setLightBoxImage,
    toggleLightbox,
  }
  return (
    <AppContext.Provider value={{ ...appState }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
export default ContextProvider
