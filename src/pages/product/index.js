import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Layout from "../../components/common/Layout";
import { Container, Row, Col } from 'react-bootstrap';
import "./index.css";
import CardView from "../../components/common/CardView";

export default function Product() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          products {
            title
            description
            series {
              title
              description
            }
          }
        }
      }
      allFile(filter: { relativePath: { regex: ".*/.*/thumbnail.png/" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(width: 300, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  // siteMetadata에서 series의 title을 배열로 추출
  const products = data.site.siteMetadata.products
  const images = data.allFile.edges;

  const getImage = (productTitle, seriesTitle) => {
    const path = `${productTitle}/${seriesTitle}/thumbnail.png`;
    const imageNode = images.find(({ node }) => node.relativePath === path);
    return imageNode ? imageNode.node.childImageSharp.gatsbyImageData : null;
  };

  return (
    <Layout>
      <Container fluid>
        <Row className="m-2">
          <Col>
            {products.map((product, index) => (
              <div key={index} id={product.title}>
                <h1 className="product-title">{product.title}</h1>
                <p className="product-description">{product.description}</p>
                <Row className="mb-5">
                  {product.series.map((series, idx) => (
                    <Col xs={6} sm={6} md={4} lg={4} xl={2} key={idx}>
                        <Link to={`${series.title}`} style={{ textDecoration: 'none' }}>
                            <CardView
                                image={getImage(product.title, series.title)}   
                                title={series.title}
                                description={series.description}
                            />
                        </Link>
                    </Col>
                ))}
                </Row>  
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

