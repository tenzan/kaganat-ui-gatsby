import React from "react"

import { StaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    allStrapiCategory {
      edges {
        node {
          strapiId
          name
        }
      }
    }
  }
`

const IndexPage = () => (
  <StaticQuery
    query={query}
    render={data => (
      <ul>
        {data.allStrapiCategory.edges.map(category => (
          <li key={category.node.strapiId}>{category.node.name}</li>
        ))}
      </ul>
    )}
  />
)

export default IndexPage
