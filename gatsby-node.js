const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/postTemplate.js`)

  const postsQuery = await graphql(`
    {
      content {
        articles: articlesConnection(first: 500) {
          edges {
            node {
              status
              updatedAt
              createdAt
              id
              title
              text
              img
              date
              slug
            }
          }
        }
      }
    }
  `)

  postsQuery.data.content.articles.edges.forEach(post => {
    createPage({
      path: post.node.slug,
      component: postTemplate,
      context: {
        data: post.node,
      },
    })
  })
}
