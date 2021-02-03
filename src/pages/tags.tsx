import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

interface Props {
    data: {
        allMarkdownRemark: any
    }
}

const TagsPage = ({ data }: Props) => {

    return (
        <>
            <SEO title="Tags" />
            <h1 style={{ textAlign: "center" }}>All Topics</h1>
            <div className={style.container}>
                {data.allMarkdownRemark.group.map(tag => (
                    <Link to={`/${tag.fieldValue}`} className=" my-1 card text-center">
                        <h2>
                            {tag.fieldValue} {`(${tag.totalCount})`}
                        </h2>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default TagsPage

export const pageQuery = graphql`
query {
    allMdx(limit: 3000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
