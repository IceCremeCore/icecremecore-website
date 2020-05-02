import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Footer from "./footer"
import "./css/style.css"
import "./css/bootstrap.css"

const FrontLayout = ({ children }) => {
    const data = useStaticQuery(graphql`
      query SiteTitleQuery {
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
  
  FrontLayout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  export default FrontLayout