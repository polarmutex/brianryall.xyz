module.exports = {
    siteMetadata: {
        title: `Brian Ryall's Blog`,
        author: `Brian Ryall`,
        description: `My thougnts, favorite things, and how tos.`,
        siteUrl: `https://brianryall.xyz/`,
        social: {
            twitter: `polarmutex`,
        },
    },
    plugins: [
        `gatsby-plugin-sitemap`,
        {
            //A canonical link element is an HTML element that helps webmasters
            //prevent duplicate content issues in search engine optimization by
            //specifying the "canonical" or "preferred" version of a web page.
            resolve: `gatsby-plugin-react-helmet-canonical-urls`,
            options: {
                siteUrl: `https://brianryall.xyz`,
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `{
                    site {
                        siteMetadata {
                            title
                            description
                            siteUrl
                            site_url: siteUrl
                        }
                    }
                }`,
                feeds: [
                    {
                        serialize: ({ query: { site, allMdx } }) => {
                            return allMdx.nodes.map(node => {
                                return Object.assign(
                                    {},
                                    node.frontmatter,
                                    {
                                        description: node.excerpt,
                                        date: node.frontmatter.date,
                                        url:
                                            site.siteMetadata
                                                .siteUrl +
                                            '/' +
                                            node.slug,
                                        guid:
                                            site.siteMetadata
                                                .siteUrl +
                                            '/' +
                                            node.slug,
                                        custom_elements: [
                                            {
                                                'content:encoded':
                                                    node.html,
                                            },
                                        ],
                                    },
                                );
                            });
                        },
                        query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { fields: { collection: { in: ["books", "posts"] } } }
                ) {
                  nodes {
                    excerpt
                    html
                    slug
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
                        output: '/rss.xml',
                        title: 'Emma Goto',
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/posts`,
                name: `posts`,
            },
        },
        `gatsby-plugin-less`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: `gatsby-plugin-plausible`,
            options: {
                domain: `brianryall.xyz`,
                // Currently when using a custom domain with self-hosted plausible, the script
                // path will incorrectly point to index.js. Here we force the correct path...
                // https://github.com/pixelplicity/gatsby-plugin-plausible/issues/49
                customDomain: `stats.brianryall.xyz/js/plausible.js?original=`,
            },
        },
    ],
}
