const reducer = (state, action) => {
  const previousState = JSON.parse(localStorage.getItem('state'))
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
  }
}

export default reducer
