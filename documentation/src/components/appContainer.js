import React, { useEffect } from 'react'
import Header from './header'
import Sidebar from './sidebar'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setIsMobile, setIsSidebarOpen } from '../redux/actions/ui'
import { useMediaQuery } from '@material-ui/core'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const StyledContent = styled.div`
  flex-grow: 1;
`

const StyledInnerContainerLarge = styled.div`
  margin-left: 240px;
  padding: 50px;
`

const StyledInnerContainerMobile = styled.div`
  padding: 25px;
`

const AppContainer = ({ content, handleViewport }) => {
  const viewportIsMobile = useMediaQuery('(max-width:480px)')

  useEffect(() => {
    handleViewport(viewportIsMobile)
  }, [viewportIsMobile, handleViewport])

  return (
    <StyledContainer>
      <StyledContent>
        <Header />
        <Sidebar />
        {viewportIsMobile ? (
          <StyledInnerContainerMobile>{content}</StyledInnerContainerMobile>
        ) : (
          <StyledInnerContainerLarge>{content}</StyledInnerContainerLarge>
        )}
      </StyledContent>
    </StyledContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  handleViewport: isMobile => {
    dispatch(setIsMobile(isMobile))
    dispatch(setIsSidebarOpen(!isMobile))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(AppContainer)
