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

const StyledParagraph = styled(Typography)`
  margin-bottom: 25px;
  margin-top: 25px;
`

const MethodTemplate = ({ pageContext }) => {
  const { description, parameters, name, returns, since, usage } = pageContext
  return (
    <Box>
      <Helmet title={name} />
      <Box>
        <StyledTitle variant="h2">{`${name}(${parameters.map(
          ({ name }) => name
        )})`}</StyledTitle>
        <StyledSubTitle>{description}</StyledSubTitle>
        <StyledDivider />
        <StyledHeading variant="h3">Since</StyledHeading>
        <StyledParagraph>{since}</StyledParagraph>
        {parameters.length > 0 && (
          <StyledHeading variant="h3">Parameters</StyledHeading>
        )}
        {parameters.map(({ name, description, required, type }) => {
          return (
            <Box>
              <StyledParagraph>
                {`${name} (${type}) ${required && '- Required'}: `}
                <i>{description}</i>
              </StyledParagraph>
            </Box>
          )
        })}
        <StyledHeading variant="h3">Returns</StyledHeading>
        <StyledParagraph>
          {`(${returns.type}): `}
          <i>{returns.description}</i>
        </StyledParagraph>
        <StyledHeading variant="h3">Usage</StyledHeading>
        <Code code={usage} language="js" />
      </Box>
    </Box>
  )
}

export default MethodTemplate
