import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "../navbar"
import Footer from "../footer"
import "../css/style.css"
import "../css/bootstrap.css"

export default function Front({ children }) {
    const data = useStaticQuery(graphql`
    query FrontTitleQuery {
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
            {children}
        </div>
        <Footer siteTitle={data.site.siteMetadata.title} />
        </>
    )
}

Front.propTypes = {
    children: PropTypes.node.isRequired,
}