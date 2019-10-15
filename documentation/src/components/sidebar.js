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
  font-family: 'Fjalla One', sans-serif !important;
  font-size: 2.5rem !important;
`

const Sidebar = () => {
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
          <StyledTitle variant="h1">pickitt</StyledTitle>
        </StyledTitleHeight>
      </StyledTitleContainer>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="pickitt" />
        </ListItem>
      </List>
      <Divider />
      <List>
        {['posOrNeg()', 'randItem()'].map(text => (
          <ListItem button key={text}>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default Sidebar
