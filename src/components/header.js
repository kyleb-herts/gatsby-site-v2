import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div
        className="header--inner"
        data-aos="fade"
        data-aos-delay="0"
        data-aos-duration="2000"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-12 align-self-center">
              <div className="header--logo">
                <Link to="/" className="header--link">
                  Kerbobble
                </Link>
                <a href="#!" className="burger">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>
            <div className="col-xl-10 col-lg-12 align-self-center text-right">
              <ul>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                <li>
                  <Link to="/services/">Services</Link>
                </li>
                <li>
                  <Link to="/contact/">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
