import React from "react"
import { Link, graphql } from "gatsby"


import Page from "../components/layout/page"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.contentfulBlogPost
        const siteTitle = this.props.data.site.siteMetadata.siteTitle
        const {previous, next} = this.props.pageContext

        return (
            <Page title={siteTitle}>
                <SEO title={post.title} />
                <div className="post-head">
                    <h1 className="post-title">{post.title}</h1>
                    <small class="text-muted">by {post.author.name} on {post.publishDate}</small>
                </div>
                <div dangerouslySetInnerHTML = {{__html: post.content.childContentfulRichText.html}} >

                </div>
            </Page>
        )
    }
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug {
        site{
            siteMetadata{
              title
              author
            }
          }
          contentfulBlogPost{
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
          }
    }
`