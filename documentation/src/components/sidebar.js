import React from 'react'
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box
} from '@material-ui/core'
import BookIcon from '@material-ui/icons/Book'
import styled from 'styled-components'
import CodeIcon from '@material-ui/icons/Code'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { Link } from 'gatsby'
import { connect } from 'react-redux'
import { setIsSidebarOpen } from '../redux/actions/ui'

const StyledTitleContainerLarge = styled(Box)`
  align-items: center;
  display: flex;
  justify-content: center;
`

const StyledTitleContainerMobile = styled(Box)`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const StyledTitleHeightLarge = styled.div`
  align-items: center;
  display: flex;
  height: 64px;
  justify-content: center;
`

const StyledTitleHeightMobile = styled.div`
  align-items: center;
  display: flex;
  height: 64px;
  justify-content: center;
  margin-left: 20px;
`

const StyledTitle = styled(Typography)`
  font-size: 2.5rem !important;
`

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

const StyledIconButton = styled(IconButton)`
  margin-left: 50px;
`

const Sidebar = ({ handleSidebarClose, isMobile, isSidebarOpen }) => (
  <Drawer
    anchor="left"
    classes={{
      paper: 'drawer-paper'
    }}
    open={isSidebarOpen}
    variant="persistent"
  >
    {isMobile ? (
      <StyledTitleContainerMobile>
        <StyledTitleHeightMobile>
          <StyledLink to="/">
            <StyledTitle variant="h1">pickitt</StyledTitle>
          </StyledLink>
        </StyledTitleHeightMobile>
        <StyledIconButton onClick={handleSidebarClose}>
          <ChevronLeftIcon />
        </StyledIconButton>
      </StyledTitleContainerMobile>
    ) : (
      <StyledTitleContainerLarge>
        <StyledTitleHeightLarge>
          <StyledLink to="/">
            <StyledTitle variant="h1">pickitt</StyledTitle>
          </StyledLink>
        </StyledTitleHeightLarge>
      </StyledTitleContainerLarge>
    )}
    <Divider />
    <List>
      <StyledLink to="/">
        <ListItem button>
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="pickitt" />
        </ListItem>
      </StyledLink>
    </List>
    <Divider />
    <List>
      {['posOrNeg()', 'randItem()'].map(text => (
        <StyledLink key={text} to={`/methods/${text.replace('()', '')}/`}>
          <ListItem button>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        </StyledLink>
      ))}
    </List>
  </Drawer>
)

const mapStateToProps = ({ ui }) => ({
  isMobile: ui.isMobile,
  isSidebarOpen: ui.isSidebarOpen
})

const mapDispatchToProps = dispatch => ({
  handleSidebarClose: () => dispatch(setIsSidebarOpen(false))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
