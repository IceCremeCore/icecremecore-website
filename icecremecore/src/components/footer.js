import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import BrandImage from "./BrandImage"

const Footer = ({siteTitle}) => (
    <footer className="mt-5 bg-secondary text-light">
        <div className="container py-3">
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <div className="brand">
                        <BrandImage /> {siteTitle}
                    </div>
                    <p className="lead">The home of Supreme.Icecreme</p>
                    <ul className="list-inline">
                        <li className="nav-item"><Link to="/" className="text-light">Home</Link></li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-12">
                    <h5 className="pt-2">Blog posts</h5>
                    <div className="footer-post">
                        <h6>Example post</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, repellendus.</p>
                        <hr/>
                    </div>
                    <div className="footer-post">
                        <h6>Example post</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, repellendus.</p>
                        <hr/>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <h5 className="pt-2">Socials</h5>
                    <ul className="list-unstyled">
                    <li><a href="https://instagram.com/Supreme.Icecreme" target="_blank" className="text-light"><i className="fab fa-instagram"></i> @Supreme.Icecreme</a></li>
                    <li><a href="https://twitter.com/SupremeIcecreme" target="_blank" className="text-light"><i className="fab fa-twitter"></i> @SupremeIcecreme</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="bg-dark text-light">
            <div className="container pt-3 d-flex justify-content-between">
                <p>Copyright &copy; 2020 IceCremeCore</p>
                <ul className="list-inline">
                    <li className="list-inline-item"><Link to="/legal-notices" className="text-light">Licenses and Legal</Link></li>
                </ul>
            </div>
        </div>
    </footer>
)

Footer.propTypes = {
    siteTitle: PropTypes.string
}

Footer.defaultProps = {
    siteTitle: ``
}

export default Footer