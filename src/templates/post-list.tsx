import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Pager from "../components/pager"
import Post from "../components/post"
import { rhythm, scale } from "../utils/typography"

interface Props {
    data: {
        allMarkdownRemark: any
        site: {
            siteMetadata: {
                title: string
            }
        }
    }
    pageContext: any
}

const PostList = ({ data, pageContext }: Props) => {
    const posts = data.allMarkdownRemark.edges
    const { tag } = pageContext

    return (
        <Layout>
            <h1 style={{ textAlign: "center", marginTop: "80px" }}>Articles</h1>
                {posts.map(({ node }) => (
                    <Post
                        title={node.frontmatter.title}
                        date={node.frontmatter.date}
                        body={node.excerpt}
                        slug={node.fields.slug}
                        tags={node.frontmatter.tags}
                    />
                ))}
            <Pager pageContext={pageContext} />
        </Layout>
    )
}

export default PostList

export const PostListQuery = graphql`
  query PostListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 100)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
            tags
          }
        }
      }
    }
  }
`

