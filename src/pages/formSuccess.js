import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Form Success" />
    <h1 className="d-none">Form Success</h1>
    <div class="main">
      <div class="card">
        <div class="heading--medium">Thank you!</div>
        <div class="padding-top--10px"></div>
        <div class="body">
          <div>
            Your form submission has been received and we will be in touch
            shortly.
          </div>

          <div class="padding-top--20px"></div>

          <div>
            <Link className="default--link" id="back-link" to="/">
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
