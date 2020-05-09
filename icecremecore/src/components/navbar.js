import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import BrandImage from "./BrandImage"

const Navbar = ({ siteTitle }) => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-gradient">
    <div className="container">
      <Link to="/" className="brand">
        <BrandImage /> {siteTitle}
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item" id="nav-home"><Link to="/" className="nav-link" activeClassName="active">Home</Link></li>
        </ul>
      </div>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
