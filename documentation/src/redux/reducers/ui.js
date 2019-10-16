const defaultState = {
  isMobile: false,
  isSidebarOpen: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_IS_MOBILE':
      return { ...state, isMobile: action.payload.isMobile }
    case 'SET_IS_SIDEBAR_OPEN':
      return { ...state, isSidebarOpen: action.payload.isSidebarOpen }
    default:
      return state
  }
}
