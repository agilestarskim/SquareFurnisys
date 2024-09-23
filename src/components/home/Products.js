import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { getImage as getGatsbyImage } from "gatsby-plugin-image";
import { Row, Col, Container } from "react-bootstrap";
import CardView from "../common/CardView";


const Products = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    products {
                        title
                        description
                    }
                }
            }
            allFile(filter: { sourceInstanceName: { eq: "products" }, relativePath: { regex: "/^[^/]+/thumbnail.png$/" } }) {
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
    
    const getImageByName = (productTitle) => {
        const folderName = productTitle;
        const imageName = `${folderName}/thumbnail.png`;
        const imageNode = images.find(({ node }) => node.relativePath === imageName);

        if (imageNode) {
            return imageNode.node.childImageSharp.gatsbyImageData;
        } else {
            return getGatsbyImage({
                src: "../../images/noResult.png",
                width: 300,
                placeholder: "blurred"
            });            
        }
    };

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={12} className="mb-4">
                    <h1 className="text-center">Products</h1>
                    <h4 className="text-center text-muted">제품정보</h4>
                </Col>
            </Row>
            <Row className="mb-4 justify-content-center" >
                {products.map((product, idx) => (
                    <Col xs={6} md={4} lg={4} xl={2} key={idx} className="g-4 mb-5">
                        <Link 
                            to={`/product#${product.title}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <CardView
                                image={getImageByName(product.title)}
                                title={product.title}
                                description={product.description}
                            />
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Products;