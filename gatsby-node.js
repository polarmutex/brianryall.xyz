const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require('lodash');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `Mdx`) {
        const slug = createFilePath({
            node,
            getNode,
            basePath: `posts/`,
            trailingSlash: false,
        });
        createNodeField({ node, name: `slug`, value: slug });

        // Creates collections out of folders i.e. posts folder
        const parent = getNode(node.parent);
        let collection = parent.sourceInstanceName;
        createNodeField({
            node,
            name: 'collection',
            value: collection,
        });
    }
};

const getRelatedPosts = (postsByTag, post) => {
    const tag = post.frontmatter.tags[0];

    if (postsByTag[tag] && postsByTag[tag].length > 1) {
        const postsForTag = postsByTag[tag];
        return postsForTag.filter(p => p.slug !== post.slug);
    }

    return [];
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const { paginate } = require("gatsby-awesome-pagination")

    const postList = path.resolve("./src/templates/post-list.tsx")

    return graphql(`
        {
            allMdx(
                sort: { order: DESC, fields: [frontmatter___date] }
                filter: {
                    fields: { collection: { in: ["books", "posts"] } }
                }
                limit: 2000
            ) {
                nodes {
                    frontmatter {
                        tags
                        date(formatString: "DD MMMM YYYY")
                        title
                    }
                    slug
                }
            }
        }
    `).then(result => {
        const posts = result.data.allMdx.nodes;

        // create blog page
        paginate({
            createPage,
            items: posts,
            itemsPerPage: 10,
            pathPrefix: "/blog",
            component: postList,
        })

        let tags = [];
        const postsByTag = {};
        posts.forEach(node => {
            if (node.frontmatter && node.frontmatter.tags) {
                // Create list of all tags
                node.frontmatter.tags.forEach(tag => {
                    if (!tags.includes(tag)) {
                        tags.push(tag);
                    }
                });

                // Create a list of posts per tag (by most recent)
                const tag = node.frontmatter.tags[0];

                if (!postsByTag[tag]) {
                    postsByTag[tag] = [];
                }

                if (postsByTag[tag].length < 4) {
                    postsByTag[tag].push(node);
                }
            }
        });

        posts.forEach((node, index) => {
            createPage({
                path: node.slug,
                component: path.resolve(
                    `./src/templates/blog-post.tsx`,
                ),
                context: {
                    slug: node.slug,
                    prev: index === 0 ? undefined : posts[index - 1],
                    next:
                        index === posts.length - 1
                            ? undefined
                            : posts[index + 1],
                    relatedPosts: getRelatedPosts(
                        postsByTag,
                        posts[index],
                    ),
                },
            });
        });

        tags = _.uniq(tags);

        tags.forEach(tag => {
            createPage({
                path: `/tags/${_.kebabCase(tag)}/`,
                component: path.resolve(`./src/templates/tags.tsx`),
                context: {
                    tag,
                },
            });
        });
    });
};

