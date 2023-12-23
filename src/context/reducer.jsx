const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_THEME': {
      return {
        ...state,
        isMode: action.payload,
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
  }
}

export default reducer
