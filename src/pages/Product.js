import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/common/Layout";
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./Product.css"; // CSS 파일을 임포트합니다.

export default function Product() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "workstation" }, relativePath: { regex: ".*/thumbnail.png/" } }) {
        edges {
          node {
            relativeDirectory
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  const descriptions = {
    "EXPAND": "확장 가능한 워크스테이션",
    "SPACE": "공간 절약형 워크스테이션",
    "NUEVO": "새로운 디자인의 워크스테이션",
    "CUBE": "큐브 형태의 워크스테이션"
  };

  const order = ["EXPAND", "SPACE", "NUEVO", "CUBE"];

  const sortedImages = data.allFile.edges
    .map(({ node }) => {
      const alt = node.relativeDirectory.split('/').pop().toUpperCase();
      return {
        src: node.childImageSharp.gatsbyImageData,
        alt: alt,
        description: descriptions[alt]
      };
    })
    .sort((a, b) => order.indexOf(a.alt) - order.indexOf(b.alt));
  
  

  const productCategories = [
    {
      title: "Workstation",
      images: sortedImages
    },
    { title: "Executive", images: [] },
    { title: "Table", images: [] },
    { title: "Storage", images: [] },
    { title: "Partition", images: [] }
  ];

  const renderTitle = (title) => {
    return (
      <h1>
        <span className="blue-letter">{title.charAt(0)}</span>
        {title.slice(1)}
      </h1>
    );
  };

  return (
    <Layout>
      <Container>
        {productCategories.map((category, index) => (
          <React.Fragment key={index}>
            {renderTitle(category.title)}
            {category.title === "Workstation" && (
              <Row className="mb-4">
                {category.images.map((image, idx) => (
                  <Col xs={12} md={6} lg={3} className="mb-4" key={idx}>
                    <Card className="h-100">
                      <GatsbyImage
                        image={image.src}
                        alt={image.alt}
                        className="card-img-top"
                      />
                      <Card.Body className="d-flex flex-column">
                        <Card.Title>{image.alt}</Card.Title>
                        <Card.Text className="flex-grow-1">{image.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </React.Fragment>
        ))}
      </Container>
    </Layout>
  );
}