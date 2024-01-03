const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_THEME': {
      return {
        ...state,
        isMode: action.payload,
      }
    }
    case 'SELECT_USER': {
      return {
        ...state,
        isSelectedUser: action.payload,
      }
    }
    case 'SET_LIGHTBOX_IMAGE': {
      return {
        ...state,
        isLightboxImage: action.payload,
      }
    }
    case 'TOGGLE_LIGHTBOX': {
      return {
        ...state,
        isLightboxOpen: action.payload,
      }
    }
    case 'UPDATE_TAB': {
      return {
        ...state,
        isSelectedTab: action.payload,
      }
    }
    case 'UPDATE_LOGIN_STATE': {
      const previousState = JSON.parse(localStorage.getItem('state'))
      localStorage.setItem(
        'state',
        JSON.stringify({
          ...previousState,
          isUserLoggedIn: action.payload,
        })
      )
      return {
        ...state,
        isUserLoggedIn: action.payload,
      }
    }
    case 'UPDATE_PRODUCTS': {
      return {
        ...state,
        products: action.payload,
      }
    }
  }
}

export default reducer
