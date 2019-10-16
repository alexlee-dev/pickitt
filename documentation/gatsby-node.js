const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const methodTemplate = path.resolve('./src/templates/method.js')
  const methodRes = await graphql(`
    query {
      allMethodsJson {
        edges {
          node {
            description
            name
            usage
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
        description: edge.node.description,
        name: edge.node.name,
        usage: edge.node.usage
      }
    })
  })
}
