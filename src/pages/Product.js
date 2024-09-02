import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Layout from "../components/common/Layout";
import { Container, Row, Col } from 'react-bootstrap';
import "./Product.css"; // CSS 파일을 임포트합니다.
import CardView from "../components/common/CardView";

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
    console.log(path);
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
          <Col>
            {products.map((product, index) => (
              <div key={index}>
                {renderTitle(product.title)}

                <Row className="mb-4">
                  {product.series.map((series, idx) => (
                    <Col xs={12} md={6} lg={4} key={idx} className="g-5">
                        <Link to={"/"} style={{ textDecoration: 'none' }}>
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

