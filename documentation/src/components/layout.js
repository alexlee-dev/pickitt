import React from 'react'
import '../styles/index.css'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { Provider } from 'react-redux'
import store from '../redux/store/store'
import AppContainer from './appContainer'

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Noto Sans']
  }
})

const Layout = props => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <AppContainer content={props.children} />
      </MuiThemeProvider>
    </Provider>
  )
}

export default Layout
