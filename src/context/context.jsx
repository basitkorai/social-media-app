import { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'
import { useMediaQuery } from '@mui/material'
import users from '../data/users'
const AppContext = createContext()

const isThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches
let systemTheme = isThemeDark ? 'dark' : 'light'

const initialState = {
  isMode: systemTheme,
  isSelectedUser: null,
  isDrawerOpen: false,
  isLightboxOpen: false,
  isLightboxImage: null,
}
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const min600 = useMediaQuery('(min-width: 600px)')

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
  const selectUser = (user_id, cb) => {
    const clickedProfile = users.find((user) => user.user_id === user_id)

    dispatch({
      type: 'SELECT_USER',
      payload: clickedProfile,
    })
    if (cb) {
      cb(`/profile/${user_id}`)
    }
  }

  const appState = {
    ...state,
    min600,
    updateTheme,
    selectUser,
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
