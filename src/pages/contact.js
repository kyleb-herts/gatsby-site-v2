import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />

    <div className="padding-top--40px"></div>

    <section className="contact--section" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <div
              className="heading--medium"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              Contact Us
            </div>
          </div>
        </div>
        <div className="padding-top--40px"></div>
        <div
          className="row justify-content-center"
          data-aos="fade"
          data-aos-delay="600"
        >
          <div className="col-lg-8">
            <form
              name="contact"
              action="/formSuccess/"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="row">
                <div className="col-lg-6">
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Name..."
                    required
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Email..."
                    required
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    name="number"
                    id=""
                    placeholder="Number..."
                    required
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    name="company"
                    id=""
                    placeholder="Company..."
                    required
                  />
                </div>
                <div className="col-lg-12">
                  <textarea
                    name="message"
                    placeholder="Message..."
                    required
                  ></textarea>
                  <input type="hidden" name="bot-field" />
                </div>
                <div className="col-lg-12 text-center">
                  <button type="submit" className="default--link">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <div className="padding-top--100px"></div>
  </Layout>
)

export default ContactPage
