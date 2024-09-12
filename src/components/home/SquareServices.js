import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import CardButtonView from "../common/CardButtonView"; // CardButtonView 컴포넌트를 임포트합니다.
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

  const handleButtonClick = (serviceTitle) => {
    if (serviceTitle === "Catalog") {
      if (typeof window !== "undefined") {
        const newWindow = window.open("/catalog.pdf", "_blank");
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          alert("팝업이 차단되었습니다. 팝업 차단을 해제하고 다시 시도해주세요.");
        }
      }
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
                <CardButtonView                  
                  image={imageNode ? imageNode.node.childImageSharp.gatsbyImageData : null}
                  title={service.title}
                  description={service.description}
                  buttonText= {service.buttonText}
                  onButtonClick={handleButtonClick(service.title)}
                />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default SquareServices;