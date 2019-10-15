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
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import styled from 'styled-components'

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
        {['Home', 'pickitt', 'posOrNeg()', 'randItem()'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default Sidebar
