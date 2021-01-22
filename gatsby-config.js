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
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`,
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
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                //trackingId: `ADD YOUR TRACKING ID HERE`,
            },
        },
        `gatsby-plugin-feed`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Gatsby Starter Blog`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `content/assets/gatsby-icon.png`,
            },
        },
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
                customDomain: `analytics.brianryall.xyz/js/plausible.js?original=`,
            },
        },
    ],
}
