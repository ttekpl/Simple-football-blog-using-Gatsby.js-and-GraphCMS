import React from "react"
import Menu from "../components/Menu"
import "../styles/index.css"
import { Link, graphql } from "gatsby"

const IndexPage = ({
  data: {
    allSitePage: { edges },
  },
}) => {
  return (
    <>
      <div className="main">
        <Menu />
        <h1 className="title">Articles</h1>
        <div className="links">
          {[...edges].reverse().map(page => {
            return (
              <div key={page.node.path + 1} className="reference">
                <img
                  key={page.node.path + 2}
                  src={page.node.context.data.img}
                  alt={page.node.context.data.title}
                />
                <div className="box" />
                <Link key={page.node.path + 3} to={page.node.path}>
                  {page.node.context.data.title.slice(0, 16) + "..."}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export const allPostsQuery = graphql`
  {
    allSitePage(
      filter: {
        component: {
          eq: "C:/Users/Damian/Documents/webdev/Blog-about-football/src/templates/postTemplate.js"
        }
      }
    ) {
      edges {
        node {
          id
          component
          path
          context {
            data {
              title
              img
            }
          }
        }
      }
    }
  }
`

export default IndexPage
