import React from 'react'
import { Box, Typography } from '@material-ui/core'
import Helmet from '../components/helmet'
import styled from 'styled-components'

const StyledTitle = styled(Typography)`
  font-size: 2rem;
`

// const StyledSubTitle = styled(Typography)`
//   margin-top: 20px;
// `

// const StyledDivider = styled(Divider)`
//   margin-bottom: 25px;
//   margin-top: 25px;
//   // width: 90%;
// `

// const StyledHeading = styled(Typography)`
//   font-size: 1.5rem;
// `

const MethodTemplate = ({ pageContext }) => {
  const { name } = pageContext
  return (
    <Box>
      <Helmet title={name} />
      <Box>
        <StyledTitle variant="h2">{`${name}()`}</StyledTitle>
        {/* <StyledSubTitle>
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
        /> */}
      </Box>
    </Box>
  )
}

export default MethodTemplate
