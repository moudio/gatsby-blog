const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const response = await graphql(`
    query {
      allContentfulGastbyApp {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  response.data.allContentfulGastbyApp.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
