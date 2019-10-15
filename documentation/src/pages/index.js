import React from 'react'
import { Box, Divider, Typography } from '@material-ui/core'
import styled from 'styled-components'
import Code from '../components/code'

const StyledTitle = styled(Typography)`
  font-size: 2rem;
`

const StyledSubTitle = styled(Typography)`
  margin-top: 20px;
`

const StyledDivider = styled(Divider)`
  margin-bottom: 25px;
  margin-top: 25px;
  // width: 90%;
`

const StyledHeading = styled(Typography)`
  font-size: 1.5rem;
`

const HomePage = () => {
  return (
    <Box>
      <Box>
        <StyledTitle variant="h2">Documentation</StyledTitle>
        <StyledSubTitle>
          Welcome to Pickitt! Get familiar with pickitt's methods, and explore
          how to start using pickitt for yourself.
        </StyledSubTitle>
        <StyledDivider />
        <StyledHeading variant="h3">Installation</StyledHeading>
        <Code code={'npm install pickitt'} language="bash" />
      </Box>
    </Box>
  )
}

export default HomePage
