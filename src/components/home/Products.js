import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { getImage as getGatsbyImage, StaticImage} from "gatsby-plugin-image";
import { Row, Col } from "react-bootstrap";
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
        <div>
            <Row className="justify-content-center">
                <Col xs={12} className="mb-4">
                    <h1 className="text-center">Products</h1>
                    <h4 className="text-center text-muted">제품정보</h4>
                </Col>
            </Row>
            <Row className="mb-4">
                {products.map((product, idx) => (
                    <Col xs={12} md={6} lg={4} key={idx} className="g-5 mb-5">
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
        </div>
    );
}

export default Products;