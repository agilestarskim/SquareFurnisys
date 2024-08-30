import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./Products.css";
import { Card, Row, Col, Container } from "react-bootstrap";


const Products = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    products {
                        image
                        title
                        description
                    }
                }
          }
            allFile(filter: { sourceInstanceName: { eq: "homeProducts" } }) {
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
      
    const products = data.site.siteMetadata.products;
    const images = data.allFile.edges;
    
    const getImageByName = (imageName) => {
        const imageNode = images.find(({ node }) => node.relativePath === imageName);
        return imageNode ? getImage(imageNode.node.childImageSharp) : null;
    };

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={12} className="mb-4">
                    <h1 className="text-center">Products</h1>
                    <h4 className="text-center text-muted">제품정보</h4>
                </Col>
            </Row>
            <Row xs={1} md={2} lg={3} className="g-5 justify-content-center">
                {products.map((product, idx) => (
                    <Col key={idx} className="d-flex">
                        <Link to={"/Product"}  className="d-flex flex-grow-1">
                            <Card className="custom-card hover-zoom flex-grow-1">
                                <GatsbyImage 
                                    image={getImageByName(product.image)} 
                                    alt={product.title}
                                    className="card-img-top"
                                    style={{ 
                                        height: "300px", 
                                        width: "100%", 
                                        objectFit: "cover" 
                                    }}
                                />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Products;