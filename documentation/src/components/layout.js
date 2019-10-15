import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.css'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import styled from 'styled-components'
import Sidebar from './sidebar'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const StyledContent = styled.div`
  flex-grow: 1;
`

const theme = createMuiTheme({
  // typography: {
  //   fontFamily: ["Source Sans Pro"]
  // }
})

const Layout = props => {
  return (
    <MuiThemeProvider theme={theme}>
      <StyledContainer>
        <StyledContent>
          <Header />
          <Sidebar />
          {props.children}
        </StyledContent>
        <Footer />
      </StyledContainer>
    </MuiThemeProvider>
  )
}

export default Layout
