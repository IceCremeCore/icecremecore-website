const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPost = path.resolve(`./src/templates/post.js`)
    return graphql(`
        {
            allContentfulBlogPost{
                edges{
                    node{
                        title
                        slug
                        description{
                            internal{
                                content
                            }
                        }
                        content{
                            childContentfulRichText{
                                html
                            }
                        }
                        author{
                            name
                        }
                        publishDate
                        tags
                    }
                }
            }
        }
    `).then(result => {
        if(result.errors) {
            throw result.errors
        }

        const posts = result.data.allContentfulBlogPost.edges

        posts.forEach((post, index) => {
            const previous = index === posts.length - 1 ? null : posts[index + 1].node
            const next = index === 0 ? null : posts[index - 1].node

            createPage({
                path: `blog/` + post.node.slug,
                component: blogPost,
                context: {
                    slug: post.node.slug,
                    previous,
                    next,
                },
            })
        })
    })
}