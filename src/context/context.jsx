import { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'
import { useMediaQuery } from '@mui/material'
import users from '../data/users'
import posts from '../data/Posts'
const AppContext = createContext()

const isThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches
let systemTheme = isThemeDark ? 'dark' : 'light'

const localState = JSON.parse(localStorage.getItem('state'))
let initialState = {
  isMode: systemTheme,
  isSelectedUser: users[users.length - 1],
  isSelectedTab: 1,
  isLightboxOpen: false,
  isLightboxImage: null,
  isUserLoggedIn: localState?.isUserLoggedIn || false,
  products: null,
  posts: localState?.posts || posts,
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const min600 = useMediaQuery('(min-width: 600px)')
  const min850 = useMediaQuery('(min-width: 850px)')
  const min900 = useMediaQuery('(min-width: 900px)')

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
  const updateSelectedTab = (tab) => {
    dispatch({
      type: 'UPDATE_TAB',
      payload: tab,
    })
  }
  const selectUser = (user_id, cb, param) => {
    const clickedProfile = users.find((user) => user.user_id === user_id)

    dispatch({
      type: 'SELECT_USER',
      payload: clickedProfile,
    })
    if (param) {
      cb(`${param}`)
    } else {
      cb(`/profile/${user_id}`)
    }
  }
  const setIsUserLoggedIn = (state) => {
    dispatch({
      type: 'UPDATE_LOGIN_STATE',
      payload: state,
    })
  }
  const setProducts = (products) => {
    dispatch({
      type: 'UPDATE_PRODUCTS',
      payload: products,
    })
  }
  const likePost = (posts, post_id) => {
    dispatch({
      type: 'LIKE_POST',
      payload: { posts, post_id },
    })
  }

  const appState = {
    ...state,
    min600,
    min850,
    min900,
    updateTheme,
    selectUser,
    setLightBoxImage,
    toggleLightbox,
    updateSelectedTab,
    setIsUserLoggedIn,
    setProducts,
    likePost,
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
