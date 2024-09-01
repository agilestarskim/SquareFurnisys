import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import CardButtonView from "../common/CardButtonView"; // CardButtonView 컴포넌트를 임포트합니다.
import { Row, Col, Container } from "react-bootstrap";

const SquareServices = () => {
  const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                services {
                    title
                    description
                    image
                    buttonText
                }
            }
        }
      allFile(filter: { sourceInstanceName: { eq: "service" }}) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  const services = data.site.siteMetadata.services;
  const images = data.allFile.edges;

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <Container fluid>
      <Row xs={1} md={2} lg={3} className="g-5 justify-content-center">
        {services.map((service, index) => {
          const imageNode = images.find(image => image.node.relativePath.includes(service.image));
          return (
            <Col key={index} className="d-flex">
              <div className="d-flex flex-grow-1">
                <CardButtonView
                  key={index}
                  image={imageNode ? imageNode.node.childImageSharp.gatsbyImageData : null}
                  title={service.title}
                  description={service.description}
                  buttonText= {service.buttonText}
                  onButtonClick={handleButtonClick}
                />
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default SquareServices;