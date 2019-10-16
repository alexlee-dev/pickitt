import React from 'react'
import Header from './header'
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

const StyledInnerContainer = styled.div`
  margin-left: 240px;
  padding: 50px;
  // width: calc(100% - 240px);
`

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Noto Sans']
  }
})

const Layout = props => {
  return (
    <MuiThemeProvider theme={theme}>
      <StyledContainer>
        <StyledContent>
          <Header />
          <Sidebar />
          <StyledInnerContainer>{props.children}</StyledInnerContainer>
        </StyledContent>
      </StyledContainer>
    </MuiThemeProvider>
  )
}

export default Layout
