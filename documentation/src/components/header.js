import React from 'react'
import { AppBar, InputBase, Toolbar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import styled from 'styled-components'

const StyledContainer = styled.div`
  flex-grow: 1;
  margin-left: 240px;
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

const Header = () => {
  return (
    <StyledContainer>
      <AppBar position="static">
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
      </AppBar>
    </StyledContainer>
  )
}

export default Header
