const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const methodTemplate = path.resolve('./src/templates/method.js')
  const methodRes = await graphql(`
    query {
      allMethodsJson {
        edges {
          node {
            name
          }
        }
      }
    }
  `)

  methodRes.data.allMethodsJson.edges.forEach(edge => {
    createPage({
      component: methodTemplate,
      path: `/methods/${edge.node.name}`,
      context: {
        name: edge.node.name
      }
    })
  })
}
