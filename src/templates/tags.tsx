import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Summaries from "../components/summaries"


interface Props {
    data: {
        allMdx: any
    }
    pageContext: any
}

const Tags = ({ data, pageContext }: Props) => {
    const posts = data.allMdx.nodes;
    const { tag } = pageContext

    return (
        <>
            <h1>{`#${tag}`}</h1>
            <Seo
                title={`Posts tagged #${tag}`}
                slug={`tags/${tag}`}
                description={`All posts writen about #${tag}`}
            />
            <Summaries posts={posts} />
        </>
    )
}

export default Tags

export const pageQuery = graphql`
    query($tag: String!) {
        allMdx(
            filter: { frontmatter: { tags: { eq: $tag } } }
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            totalCount,
            nodes {
                frontmatter {
                    date(formatString: "MMMM Do YYYY")
                    title
                    tags
                }
                slug
            }
        }
    }
`
