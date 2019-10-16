// * ACTION TYPES
const SET_IS_MOBILE = 'SET_IS_MOBILE'
const SET_IS_SIDEBAR_OPEN = 'SET_IS_SIDEBAR_OPEN'

// * ACTION GENERATORS
export const setIsMobile = isMobile => ({
  type: SET_IS_MOBILE,
  payload: { isMobile }
})

export const setIsSidebarOpen = isSidebarOpen => ({
  type: SET_IS_SIDEBAR_OPEN,
  payload: { isSidebarOpen }
})

// * PROMISES

// * THUNKS
