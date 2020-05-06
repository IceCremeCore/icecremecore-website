/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "../navbar"
import Footer from "../footer"
import "../css/style.css"
import "../css/bootstrap.css"

export default function Page({ children }) {
  const data = useStaticQuery(graphql`
    query PageTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}
