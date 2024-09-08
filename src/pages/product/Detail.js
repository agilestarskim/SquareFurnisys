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

    const images = data.allFile.edges.sort((a, b) => {
      const numA = parseInt(a.node.name.match(/\d+/), 10);
      const numB = parseInt(b.node.name.match(/\d+/), 10);
      return numA - numB;
    });
  
  return (
    <Layout>
      <Container>
        <Row>
        <Col className="mt-4">
        <h1 className="series-detail-title">{series.title}</h1>
        <p className="series-detail-description">{series.description}</p>
        <Row className="mb-4">
          {images.map(({ node }, index) => (
            <Col md={12} lg={6} key={index} className="g-5">
              <GatsbyImage
                image={getImage(node.childImageSharp)}
                alt={node.name}
                className="series-image"
              />
            </Col>
          ))}
        </Row>
          </Col>
        </Row>
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