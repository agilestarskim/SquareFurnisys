import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/common/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "react-bootstrap";
import "./Detail.css";

const Detail = ({ data, pageContext }) => {
  const { productTitle, seriesTitle } = pageContext;

  const product = data.site.siteMetadata.products.find(product => product.title === productTitle);
  const series = product ? product.series.find(series => series.title === seriesTitle) : "Not Found";

  const images = data.allFile.edges.filter(({ node }) => !node.name.includes('top') && !node.name.includes('bottom')).sort((a, b) => {
    const numA = parseInt(a.node.name.match(/\d+/), 10);
    const numB = parseInt(b.node.name.match(/\d+/), 10);
    return numA - numB;
  });

  const topImages = data.allFile.edges.filter(({ node }) => node.name.includes('top'));
  const bottomImages = data.allFile.edges.filter(({ node }) => node.name.includes('bottom'));
  
  return (
    <Layout>
      <Container>
        <Row className="items-background">
          <Col>
          <h1 className="series-detail-title">{series.title}</h1>
          <p className="series-detail-description">{series.description}</p>
          </Col>
        </Row>

        {/* top 이미지 배치 */}
        {topImages.length > 0 && (
          <Row className="items-background">
            {topImages.map(({ node }, index) => (
              <Col lg={6} key={index} className="mb-5">
                <GatsbyImage
                  image={getImage(node.childImageSharp)}
                  alt={node.name}
                  className="top-bottom-image"
                />
              </Col>
            ))}
          </Row>
        )}
        
        {/* 기존 이미지 배치 */}
        <Row className="items-background">
          {images.map(({ node }, index) => (
            <Col md={4} lg={3} key={index} className="mb-5">
              <GatsbyImage
                image={getImage(node.childImageSharp)}
                alt={node.name}
                className="series-image"
              />
            </Col>
          ))}
        </Row>

        {/* bottom 이미지 배치 */}
        {bottomImages.length > 0 && (
          <Row className="items-background">
            {bottomImages.map(({ node }, index) => (
              <Col lg={6} key={index} className="mb-5">
                <GatsbyImage
                  image={getImage(node.childImageSharp)}
                  alt={node.name}
                  className="top-bottom-image"
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query($relativeDirectory: String) {
    site {
      siteMetadata {
        products {
          title
          series {
            title
            description
          }
        }
      }
    }
    allFile(
      filter: {
        relativeDirectory: { eq: $relativeDirectory }
        name: { ne: "thumbnail" }
      }
    ) {
      edges {
        node {
          name
          relativeDirectory
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export default Detail;

export const Head = () => (
  <>
    <title>스퀘어 퍼니시스 - 제품정보</title>
    <meta name="description" content="제품정보" />
  </>
)