import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout/page"
import { Link, graphql } from "gatsby"

const BlogHome = ({data}) => (
    <Layout>
        <SEO title="Blog" />
        <h3>Blog</h3>
        <p className="lead">This is a blog.</p>
        <div className="posts">
            {data.allContentfulBlogPost.edges.map(post => (
                <div className="card mb-3" key={post.node.id}>
                    <div className="card-body">
                        <h5 className="mb-1"><Link to={`blog/`+post.node.slug} className="card-link text-dark">{post.node.title}</Link></h5>
                        <p className="m-0"><small className="card-text text-muted">by {post.node.author.name} on {post.node.publishDate}</small></p>
                        <p className="card-text">{post.node.description.internal.content}</p>
                        <div className="d-flex justify-content-around">
                            <div className="d-flex">
                                Tags: 
                                {post.node.tags.map(tag => (
                                    <div className="mx-1">{tag}</div>
                                ))}
                            </div>
                            <Link to={`blog/`+post.node.slug} className="ml-auto">Read more <i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </Layout>
)

export const pageQuery = graphql`
    query GetBlogPosts {
        allContentfulBlogPost {
            edges {
                node {
                    id
                    title
                    author {
                        name
                    }
                    publishDate
                    slug
                    description {
                        internal {
                            content
                        }
                    }
                    tags
                }
            }
        }
    }
`

export default BlogHome