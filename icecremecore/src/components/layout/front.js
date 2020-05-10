import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "../navbar"
import Footer from "../footer"
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
        <header className="front-landing d-flex align-items-center">
            <div className="container flex-column text-light mb-5 pb-3">
                <h1 className="display-4">Hello World!</h1>
                <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis doloremque mollitia corrupti optio hic deserunt quasi incidunt dolorum ipsam, aut ducimus? Ex, soluta? Totam laudantium expedita doloribus dicta, nemo aliquam!</p>
            </div>  
        </header>
        <section className="container mt-5">
            {children}
        </section>
        <Footer siteTitle={data.site.siteMetadata.title} />
        </>
    )
}

Front.propTypes = {
    children: PropTypes.node.isRequired,
}