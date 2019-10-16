import React from 'react'
import { AppBar, InputBase, Toolbar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import styled from 'styled-components'

const StyledContainer = styled.div`
  flex-grow: 1;
  width: calc(100% - 240px);
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

const StyledAppBar = styled(AppBar)`
  margin-left: 240px;
`

const Header = () => {
  return (
    <StyledContainer>
      <StyledAppBar position="static">
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
      </StyledAppBar>
    </StyledContainer>
  )
}

export default Header
