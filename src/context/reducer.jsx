const reducer = (state, action) => {
  const previousState = JSON.parse(localStorage.getItem('state'))
  switch (action.type) {
    case 'UPDATE_MODE': {
      const body = document.getElementById('body')
      body.style.background = action.payload === 'dark' ? '#121212' : '#fff'
      return {
        ...state,
        isMode: action.payload,
      }
    }
    case 'UPDATE_THEME': {
      localStorage.setItem(
        'state',
        JSON.stringify({
          ...previousState,
          isTheme: action.payload,
        })
      )
      return {
        ...state,
        isTheme: action.payload,
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
    case 'TOGGLE_SEARCH_MODAL': {
      return {
        ...state,
        isSearchModalOpen: !state.isSearchModalOpen,
      }
    }
    case 'TOGGLE_SETTINGS_MODAL': {
      return {
        ...state,
        isSettingsModalOpen: !state.isSettingsModalOpen,
      }
    }
    case 'UPDATE_TAB': {
      return {
        ...state,
        isSelectedTab: action.payload,
      }
    }
    case 'UPDATE_LOGIN_STATE': {
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
    case 'LIKE_POST': {
      const { posts, post_id } = action.payload
      const postIndex = posts.findIndex((post) => post.post_id === post_id)
      const post = posts[postIndex]

      const updatedPost = { ...post, is_liked: !post.is_liked }
      const updatedPosts = [
        ...posts.slice(0, postIndex),
        updatedPost,
        ...posts.slice(postIndex + 1),
      ]
      localStorage.setItem(
        'state',
        JSON.stringify({
          ...previousState,
          posts: updatedPosts,
        })
      )
      return {
        ...state,
        posts: updatedPosts,
      }
    }
    case 'SAVE_POST': {
      const { posts, post_id } = action.payload
      const postIndex = posts.findIndex((post) => post.post_id === post_id)
      const post = posts[postIndex]

      const updatedPost = { ...post, is_saved: !post.is_saved }
      const updatedPosts = [
        ...posts.slice(0, postIndex),
        updatedPost,
        ...posts.slice(postIndex + 1),
      ]
      localStorage.setItem(
        'state',
        JSON.stringify({
          ...previousState,
          posts: updatedPosts,
        })
      )
      return {
        ...state,
        posts: updatedPosts,
      }
    }
  }
}

export default reducer
