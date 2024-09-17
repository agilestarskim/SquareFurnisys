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
        <Row>
          <Col className="mt-4">
            {products.map((product, index) => (
              <div key={index} id={product.title}>
                {renderTitle(product.title)}

                <Row className="mb-4">
                  {product.series.map((series, idx) => (
                    <Col xs={6} sm={6} md={6} lg={4} xl={3} key={idx} className="mt-3 mb-3">
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
