import React from 'react'
// import { graphql } from 'gatsby'
// import { Box } from '@material-ui/core'
// import Helmet from '../components/helmet'

// export const query = graphql`
//   query($name: String!) {
//     methodsJson(name: { eq: $name }) {
//       name
//     }
//   }
// `

const MethodTemplate = props => {
  console.log({ methodProps: props })
  return (
    // <Box>
    //   <Helmet title={props.data.name} />
    //   <Box>
    //     {console.log({ props })}
    //     <span>{props.data.name}</span>
    //     <pre>{JSON.stringify(props, null, 2)}</pre>
    //   </Box>
    // </Box>
    <span>ASS</span>
  )
}

export default MethodTemplate
