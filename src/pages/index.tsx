import React from "react"
import Layout from "../components/layout"

interface Props {
  data: {
    allMarkdownRemark: any
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const BlogIndex = ({ data }: Props) => {

  return (
    <Layout>
    </Layout>
  )
}

export default BlogIndex

