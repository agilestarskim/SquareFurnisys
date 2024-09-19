import React from "react";
import { graphql, useStaticQuery, navigate } from "gatsby";
import CardView from "../common/CardView"; // CardButtonView 컴포넌트를 임포트합니다.
import { Row, Col } from "react-bootstrap";

const SquareServices = () => {
  const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                services {
                    title
                    description
                    image
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

  const handleButtonClick = (serviceTitle) => {
    if (serviceTitle === "Catalog") {
      if (typeof window !== "undefined") {
        window.open("catalog.pdf", "_blank");
      } 
    } else if (serviceTitle === "Showroom") {
      navigate("showroom");
    }    
  };

  return (
    <div>
      <Row className="g-4">
        <p className="text-center fs-1">
            SQUARE <span className="highlight">SERVICES</span>
        </p>
        {services.map((service, index) => {
          const imageNode = images.find(image => image.node.relativePath.includes(service.image));

          return (
            <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
              <div onClick={() => handleButtonClick(service.title)}>
                <CardView                  
                  image={imageNode ? imageNode.node.childImageSharp.gatsbyImageData : null}
                  title={service.title}
                  description={service.description}
                />
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default SquareServices;