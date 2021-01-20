import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import style from "./layout.module.less"
import Header from "./header"

interface Props {
    children?: any
}

const Layout = ({ children }: Props) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className={style.container} id="content">
                <main>{children}</main>
            </div>
        </div>
    )
}

export default Layout
