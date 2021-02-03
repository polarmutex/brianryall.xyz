/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
    description?: string
    title: string
    slug: string
    isPost?: boolean
}

const Seo = ({ description, title, slug, isPost = false }: Props) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                    }
                }
            }
        `
    );

    const slugWithoutSlashes = () => isPost ? slug.replace(/\//g, '') : slug;
    //const socialCard = isPost
    //    ? `${
    //          site.siteMetadata.siteUrl
    //      }/${slugWithoutSlashes()}-twitter.png`
    //    : `${site.siteMetadata.siteUrl}/square-social-card.png`;
    const twitterCard = isPost ? 'summary_large_image' : 'summary';

    return (
        <Helmet
            htmlAttributes={{
                lang: "en",
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: description || site.siteMetadata.description,
                },
                {
                    property: `og:title`,
                    content: title || site.siteMetadata.title,
                },
                {
                    property: `og:description`,
                    content: description || site.siteMetadata.description,
                },
                {
                    property: `og:url`,
                    content: slug ?
                        `${site.siteMetadata.siteUrl}/${slugWithoutSlashes()}/`
                        : site.siteMetadata.siteUrl,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                //{
                //    property: `og:image`,
                //    content: socialCard,
                //},
                {
                    name: `twitter:card`,
                    content: twitterCard,
                },
                {
                    name: `twitter:title`,
                    content: title || site.siteMetadata.title,
                },
                {
                    name: `twitter:description`,
                    content: description || site.siteMetadata.description,
                },
            ]}
            //link = {[
            //    {
            //        rel: 'shortcut icon',
            //        type: 'image/png',
            //        href: `${favicon}`
            //    }
            //]}
        />
    )
}

Seo.defaultProps = {
    description: ""
}

export default Seo
