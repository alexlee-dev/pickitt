import React from 'react'
import { Box, Divider, Typography } from '@material-ui/core'
import Helmet from '../components/helmet'
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
`

const StyledHeading = styled(Typography)`
  font-size: 1.5rem;
`

const MethodTemplate = ({ pageContext }) => {
  const { description, name, usage } = pageContext
  return (
    <Box>
      <Helmet title={name} />
      <Box>
        <StyledTitle variant="h2">{`${name}()`}</StyledTitle>
        <StyledSubTitle>{description}</StyledSubTitle>
        <StyledDivider />
        <StyledHeading variant="h3">Usage</StyledHeading>
        <Code code={usage} language="js" />
      </Box>
    </Box>
  )
}

export default MethodTemplate
