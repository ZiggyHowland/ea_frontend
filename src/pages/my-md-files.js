import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"

export default function MyFiles2({ data }) {
    console.log(data) 

    return (
        <Layout>       
            
        <h1>Hello world</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <h3>
                    {node.frontmatter.title}{" "}
                    <span>
                        — {node.frontmatter.date}
                    </span>
                    </h3>
                    <p>{node.excerpt}</p>
                </div>
            ))} 
        </Layout>
    )
}



export const data = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`