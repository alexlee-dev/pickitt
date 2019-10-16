import React from 'react'
import {
  Divider,
  Drawer,
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
import { Link } from 'gatsby'

const StyledTitleContainer = styled(Box)`
  align-items: center;
  display: flex;
  justify-content: center;
`

const StyledTitleHeight = styled.div`
  align-items: center;
  display: flex;
  height: 64px;
  justify-content: center;
`

const StyledTitle = styled(Typography)`
  font-size: 2.5rem !important;
`

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

const Sidebar = props => {
  return (
    <Drawer
      anchor="left"
      classes={{
        paper: 'drawer-paper'
      }}
      open={true}
      variant="persistent"
    >
      <StyledTitleContainer>
        <StyledTitleHeight>
          <StyledLink to="/">
            <StyledTitle variant="h1">pickitt</StyledTitle>
          </StyledLink>
        </StyledTitleHeight>
      </StyledTitleContainer>
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
}

export default Sidebar
