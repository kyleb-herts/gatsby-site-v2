import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = props => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  return (
    <Layout>
      <SEO title="About" />
      <h1 className="d-none">About</h1>

      <section className="top--section">
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-lg-12">
              <div
                className="image height--80"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(" +
                    data.featuredImage +
                    ")",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "fixed",
                }}
              >
                <div className="container">
                  <div className="row height--80">
                    <div className="col-lg-6 col-md-8 align-self-center">
                      <div
                        className="heading--large color--white"
                        data-aos="fade-up"
                        data-aos-delay="400"
                        dangerouslySetInnerHTML={{ __html: data.topHeading }}
                      ></div>
                      <div className="padding-top--10px"></div>
                      <div
                        className="top--sub__heading color--white"
                        data-aos="fade-up"
                        data-aos-delay="600"
                      >
                        {data.topSubtitle}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="scroll-downs active">
        <div className="mousey">
          <div className="scroller"></div>
        </div>
      </div> */}
      </section>

      <div className="padding-top--150px"></div>

      <section className="mid--section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 order-md-2">
              <div
                className="image height--60"
                data-aos="fade"
                data-aos-delay="0"
                style={{
                  backgroundImage: "url(" + data.topContentImage + ")",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <div className="col-lg-6 col-md-6 order-md-1 align-self-center">
              <div className="text">
                <div
                  className="heading--medium"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  {data.topContentTagline}
                </div>
                <div className="padding-top--10px"></div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  dangerouslySetInnerHTML={{ __html: data.topContentText }}
                ></div>
                <div className="padding-top--20px"></div>
                <div data-aos="fade-up" data-aos-delay="400">
                  <Link to={data.topContentLinkLink} className="default--link">
                    {data.topContentLinkText}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="padding-top--150px"></div>

          <div className="row">
            <div className="col-lg-6 col-md-6 order-md-1">
              <div
                className="image height--60"
                data-aos="fade"
                data-aos-delay="0"
                style={{
                  backgroundImage: "url(" + data.bottomContentImage + ")",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <div className="col-lg-6 col-md-6 order-md-2 align-self-center">
              <div className="text">
                <div
                  className="heading--medium"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  {data.bottomContentTagline}
                </div>
                <div className="padding-top--10px"></div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  dangerouslySetInnerHTML={{ __html: data.bottomContentText }}
                ></div>
                <div className="padding-top--20px"></div>
                <div data-aos="fade-up" data-aos-delay="400">
                  <Link
                    to={data.bottomContentLinkLink}
                    className="default--link"
                  >
                    {data.bottomContentLinkText}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="padding-top--150px"></div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "content" }, name: { eq: "about" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              topHeading
              topSubtitle
              featuredImage
              topContentImage
              topContentTagline
              topContentText
              topContentLinkText
              topContentLinkLink
              bottomContentImage
              bottomContentTagline
              bottomContentText
              bottomContentLinkText
              bottomContentLinkLink
            }
          }
        }
      }
    }
  }
`
