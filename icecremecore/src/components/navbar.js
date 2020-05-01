import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import BrandImage from "./BrandImage"

const Navbar = ({ siteTitle }) => (
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-gradient">
    <div class="container">
      <a href="#" class="brand">
          <BrandImage /> {siteTitle}
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" id="nav-home"><Link to="/" className="nav-link" activeClassName="active">Home</Link></li>
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
