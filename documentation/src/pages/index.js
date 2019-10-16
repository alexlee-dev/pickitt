import React from 'react'
import { Box, Button, Divider, Typography } from '@material-ui/core'
import styled from 'styled-components'
import Code from '../components/code'
import Helmet from '../components/helmet'
import CodeIcon from '@material-ui/icons/Code'
import GetAppIcon from '@material-ui/icons/GetApp'
// import LibraryAddIcon from '@material-ui/icons/LibraryAdd'
// import ArchiveIcon from '@material-ui/icons/Archive'

const StyledTitle = styled(Typography)`
  font-size: 2rem;
`

const StyledSubTitle = styled(Typography)`
  margin-top: 20px;
`

const StyledDivider = styled(Divider)`
  margin-bottom: 25px;
  margin-top: 25px;
`

const StyledHeading = styled(Typography)`
  font-size: 1.5rem;
`

const StyledButtonContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
  margin-top: 25px;
`

const StyledSecondButton = styled(Button)`
  margin-left: 25px;
`

const StyledButtonAnchor = styled.a`
  text-decoration: none;
`

const HomePage = () => {
  return (
    <Box>
      <Helmet title="Documentation" />
      <Box>
        <StyledTitle variant="h2">Documentation</StyledTitle>
        <StyledSubTitle>
          Welcome to Pickitt! Get familiar with pickitt's methods, and explore
          how to start using pickitt for yourself.
        </StyledSubTitle>
        <StyledDivider />
        <StyledHeading variant="h3">Installation</StyledHeading>
        <Code code={'npm install pickitt'} language="bash" />
        <StyledHeading variant="h3">Usage</StyledHeading>
        <Code
          code={`import { randItem } from 'pickitt'

const testArray = ['item1', 'item2', 'item3']

const randomElement = randItem(testArray) // <-- 'item1', 'item2', or 'item3'`}
          language="js"
        />
        <StyledHeading variant="h3">Links</StyledHeading>
        <StyledButtonContainer>
          <StyledButtonAnchor
            href="https://www.npmjs.com/package/pickitt"
            rel="noopener"
            target="_blank"
          >
            <Button
              color="default"
              startIcon={<GetAppIcon />}
              variant="contained"
            >
              NPM
            </Button>
          </StyledButtonAnchor>

          <StyledButtonAnchor
            href="https://github.com/alexlee-dev/pickitt"
            rel="noopener"
            target="_blank"
          >
            <StyledSecondButton
              color="primary"
              startIcon={<CodeIcon />}
              variant="contained"
            >
              GitHub
            </StyledSecondButton>
          </StyledButtonAnchor>
        </StyledButtonContainer>
      </Box>
    </Box>
  )
}

export default HomePage
