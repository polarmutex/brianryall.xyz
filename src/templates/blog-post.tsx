import React from "react"
import { Link, graphql } from "gatsby"
import Content from "../components/content"
import PostPager from "../components/post-pager"
import Seo from "../components/seo"

interface Props {
    data: {
        mdx: {
            frontmatter: {
                title: any,
                date: any,
                updated: any,
                tags: any,
            },
            slug: any,
            body: any,
            excerpt:any,
        }
    },
    pageContext: {
        prev: any,
        next: any,
        relatedPosts: any,
    }
}

const BlogPostTemplate = ({ data, pageContext }: Props) => {
    const { date, title, tags, updated } = data.mdx.frontmatter
    const { body, excerpt, slug } = data.mdx
    const { prev, next } = pageContext

    return (
        <div>
            <Seo
                title={title}
                slug={slug}
                description={excerpt}
                isPost
            />
            <Content
                title={title}
                body={body}
                date={date}
                updated={updated}
                tags={tags}
                slug={slug}
            >
            </Content>
            <PostPager prev={prev && prev.node} next={next && next.node} />
        </div>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query($slug: String!) {
        mdx(slug: { eq: $slug }) {
            frontmatter {
                tags
                date(formatString: "DD MMMM YYYY")
                updated(formatString: "DD MMMM YYYY")
                title
            }
            slug
            body
            excerpt
        }
    }
`;
