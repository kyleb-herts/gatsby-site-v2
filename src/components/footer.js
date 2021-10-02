import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer>
    <section className="contact--banner">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div
              className="heading--large"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              Want to work together? Let's talk.
            </div>
            <div className="padding-top--10px"></div>
            <div data-aos="fade-up" data-aos-delay="50">
              <Link to="/contact/">
                <div className="default--button default--button__white">
                  Get in touch
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="footer--logo">
            <a href="/" className="footer--link">
              Kerbobble
            </a>
          </div>
        </div>
        <div className="col-md-2">
          <div className="padding-top--10px"></div>

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

        <div className="col-md-4 text-md-right text-center">
          <div className="padding-top--10px"></div>

          <ul className="footer--social">
            <li className="d-block">
              <div className="company--number__text">
                Address: Aulton Place, London, SE11 4AG
              </div>
              <div className="padding-top--10px"></div>
            </li>
            <li className="d-block">
              <div className="company--number__text">
                Company Number: 12080644
              </div>
              <div className="padding-top--10px"></div>
            </li>
            <li className="d-block">
              <div className="company--number__text">
                <a href="mailto:sales@kerbobble.co.uk">Email: sales@kerbobble.co.uk</a>
              </div>
              <div className="padding-top--10px"></div>
            </li>
            <li className="d-block">
              <div className="company--number__text">
                <a href="tel:02034885214">Phone: 02034885214</a>
              </div>
              <div className="padding-top--10px"></div>
            </li>

          </ul>

          <div className="padding-top--10px"></div>

          <ul className="footer--social">
            <li>
              <a href="#!">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer