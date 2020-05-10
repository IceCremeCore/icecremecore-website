import React from "react"
import { Link, graphql } from "gatsby"


import Page from "../components/layout/page"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.contentfulBlogPost
        const siteTitle = this.props.data.site.siteMetadata.siteTitle
        const { previous, next } = this.props.pageContext

        return (
            <Page title={siteTitle}>
                <SEO title={post.title} />
                <div className="post-head">
                    <h1 className="post-title">{post.title}</h1>
                    <p className="post-description">{post.description.internal.content}</p>
                    <small class="text-muted">by {post.author.name} on {post.publishDate}</small>
                </div>
                <div dangerouslySetInnerHTML = {{__html: post.content.childContentfulRichText.html}} >

                </div>
                <div className="post-bottom">
                    <h4>See more on The Blog:</h4>
                    <div className="d-flex justify-content-between">
                        {previous && (
                            <Link to={`blog/` + previous.slug} rel="prev" className="mr-3"><p className="post-context-nav"><i className="fas fa-arrow-left"></i><strong> Previous</strong></p> {previous.title}</Link>
                        )}
                        {next && (
                            <Link to={`blog/` + next.slug} rel="next"><p className="post-context-nav"><strong>Next </strong><i className="fas fa-arrow-right"></i></p>{next.title}</Link>
                        )}
                    </div>
                    <h5 className="mt-4">Related posts:</h5>
                    <div className="row">
                            {this.props.data.allContentfulBlogPost.edges.map(post => (
                                <div className="col-md-6 col-sm-12">
                                    <div className="card my-2">
                                        <div className="card-body">
                                            <h6 className="mb-0"><Link to={`blog/`+post.node.slug} className="text-dark">{post.node.title}</Link></h6>
                                            <p><small>by {post.node.author.name} on {post.node.publishDate}</small></p>
                                            <p className="mb-1">{post.node.description.internal.content}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </Page>
        )
    }
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site{
            siteMetadata{
              title
              author
            }
          }
          contentfulBlogPost(slug: {eq: $slug}){
            title
            author{
              name
            }
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
            publishDate
            tags
        }
        allContentfulBlogPost(filter: {tags: {in: ["general"]}, slug: {ne: $slug}}, limit: 3) {
            edges{
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