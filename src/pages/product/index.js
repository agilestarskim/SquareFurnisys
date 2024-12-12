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
              gatsbyImageData(width: 300, quality: 100, placeholder: BLURRED)
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
        <Container fluid className="p-0">
          {products.map((product, index) => (            
            <div key={index} id={product.title} className="product-container">
              <Container>
                <Row>
                  <h1 className="product-title">{product.title}</h1>
                  <p className="product-description">{product.description}</p>              
                    {product.series.map((series, idx) => (
                      <Col xs={12} sm={6} md={6} lg={4} xl={3} key={idx} className="g-4">
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
                </Container>                          
            </div>          
          ))}      
        </Container>          
    </Layout>
  );
}

export const Head = () => (
  <>
    <title>스퀘어 퍼니시스 - 제품정보</title>
    <meta name="description" content="Workstation-워크스테이션, Excutive-익스큐티브, Partition-파티션, Storage-스토리지 사물함, Table - 테이블 책상 등 다양한 상세 제품들을 확인해보세요." />
  </>
)
