const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
    const postList = path.resolve("./src/templates/post-list.tsx")
    const tagPage = path.resolve("./src/templates/tag.tsx")

    const result = await graphql(`
    {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        tags
                    }
                }
            }
        }
    }`)

    if (result.errors) {
        throw result.errors
    }

    const posts = result.data.allMarkdownRemark.edges

    const { paginate } = require("gatsby-awesome-pagination")
    paginate({
        createPage,
        items: posts,
        itemsPerPage: 10,
        pathPrefix: "/blog",
        component: postList,
    })

    // Tags
    let allTags = []
    // Iterate through each post, putting all found tags into `allTags array`
    _.each(posts, edge => {
        if (_.get(edge, "node.frontmatter.tags")) {
            allTags = allTags.concat(edge.node.frontmatter.tags)
        }
    })
    // Eliminate duplicate tags
    allTags = _.uniq(allTags)

    allTags.forEach(async (tag, index) => {
        const tagposts = await graphql(`
        {
            allMarkdownRemark(filter: { frontmatter: { tags: { eq: "${tag}" } } }) {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                        excerpt
                    }
                }
            }
        }
    `)
    const tagpostsEntries = tagposts.data.allMarkdownRemark.edges
    paginate({
        createPage,
        items: tagpostsEntries,
        itemsPerPage: 10,
        pathPrefix: `/${_.kebabCase(tag)}`,
        component: tagPage,
        context: {
            tag,
        },
        })
    })

    // Create blog posts pages.
    posts.forEach((post, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node

        createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
                slug: post.node.fields.slug,
                previous,
                next,
            },
        })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}
