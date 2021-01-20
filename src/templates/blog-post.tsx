import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import PostPager from "../components/post-pager"
import style from "./blog-post.module.less"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

interface Props {
    data: {
        markdownRemark: any
        site: {
            siteMetadata: {
                title: string
            }
        }
    }
    pageContext: any
}

const BlogPostTemplate = ({ data, pageContext }: Props) => {
    const { title, tags, description } = data.markdownRemark.frontmatter
    const { excerpt } = data.markdownRemark
    const { prev, next } = pageContext
    const { id } = data.markdownRemark

    return (
        <Layout>
            <div>
                <SEO
                    title={title}
                    description={description || excerpt}
                />
                <h1 style={{ backgroundColor: "#1e2127", textAlign: "left" }}>
                    {title}
                </h1>
                <div
                    dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                    className={style.markdownBody}
                />
                <div className={style.markdownBody}>
                    <br />
                    <span>Tagged in </span>
                    {tags.map((tag, i) => (
                        <a href={`/${tag}`} key={i} style={{ marginLeft: "10px" }}>
                            {tag}
                        </a>
                    ))}
                </div>
                {/* <Share title={title} url={url} pathname={props.location.pathname} /> */}
                <PostPager prev={prev && prev.node} next={next && next.node} />
            </div>
        </Layout>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

