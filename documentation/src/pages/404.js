import React from 'react'
import { Box, Button, Divider, Typography } from '@material-ui/core'
import styled from 'styled-components'
import Helmet from '../components/helmet'
import HomeIcon from '@material-ui/icons/Home'
import NotFoundImage from '../static/dog404.png'
import { Link } from 'gatsby'

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

const StyledImage = styled.img`
  width: 50%;
`

const StyledImageContainer = styled(Box)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const NotFoundPage = () => {
  return (
    <Box>
      <Helmet title="Page Not Found" />
      <Box>
        <StyledTitle variant="h2">Page Not Found</StyledTitle>
        <StyledImageContainer>
          <StyledImage alt="Page Not Found" src={NotFoundImage} />
        </StyledImageContainer>
        <StyledSubTitle>
          Your dog is cute but honestly a menace. Where are my shoes? Where is
          my graduation certificate? Where is the chocolate cake I baked for my
          Aunt’s birthday? And why did you take your dog to the vet on that same
          Thursday?!
        </StyledSubTitle>
        <StyledDivider />
        <StyledLink>
          <Button color="default" startIcon={<HomeIcon />} variant="contained">
            Home
          </Button>
        </StyledLink>
      </Box>
    </Box>
  )
}

export default NotFoundPage
