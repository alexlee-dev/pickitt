import React from 'react'
import { AppBar, IconButton, InputBase, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setIsSidebarOpen } from '../redux/actions/ui'

const StyledContainerLarge = styled.div`
  flex-grow: 1;
  width: calc(100% - 240px);
`

const StyledContainerMobile = styled.div`
  flex-grow: 1;
  width: calc(100%);
`

const StyledSearchContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  margin-right: 16px;
  position: relative;

  :hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
`

const StyledSearchIconContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  pointer-events: none;
  position: absolute;
  width: 56px;
`

const StyledAppBarLarge = styled(AppBar)`
  margin-left: 240px;
`

const StyledAppBarMobile = styled(AppBar)``

const StyledIconButton = styled(IconButton)`
  margin-right: 10px;
`

const Header = ({ handleMenuClick, isMobile, isSidebarOpen }) => {
  if (isMobile) {
    return (
      <StyledContainerMobile>
        <StyledAppBarMobile position="static">
          <Toolbar>
            <StyledIconButton
              aria-label="menu"
              color="inherit"
              edge="start"
              onClick={() => handleMenuClick(!isSidebarOpen)}
            >
              <MenuIcon />
            </StyledIconButton>
            <StyledSearchContainer>
              <StyledSearchIconContainer>
                <SearchIcon />
              </StyledSearchIconContainer>
              <InputBase
                classes={{
                  root: 'search-root',
                  input: 'search-input'
                }}
                inputProps={{ 'aria-label': 'search' }}
                placeholder="Search…"
              />
            </StyledSearchContainer>
          </Toolbar>
        </StyledAppBarMobile>
      </StyledContainerMobile>
    )
  } else {
    return (
      <StyledContainerLarge>
        <StyledAppBarLarge position="static">
          <Toolbar>
            <StyledSearchContainer>
              <StyledSearchIconContainer>
                <SearchIcon />
              </StyledSearchIconContainer>
              <InputBase
                classes={{
                  root: 'search-root',
                  input: 'search-input'
                }}
                inputProps={{ 'aria-label': 'search' }}
                placeholder="Search…"
              />
            </StyledSearchContainer>
          </Toolbar>
        </StyledAppBarLarge>
      </StyledContainerLarge>
    )
  }
}

const mapStateToProps = ({ ui }) => ({
  isMobile: ui.isMobile,
  isSidebarOpen: ui.isSidebarOpen
})

const mapDispatchToProps = dispatch => ({
  handleMenuClick: isSidebarOpen => dispatch(setIsSidebarOpen(isSidebarOpen))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
