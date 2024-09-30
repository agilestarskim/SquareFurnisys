import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/common/Layout";
import { Container, Row, Col } from 'react-bootstrap';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import './Portfolio.css';

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "portfolio" },        
        extension: { in: ["jpg", "png", "webp"] }
      }
    ) {
      edges {
        node {
          relativeDirectory
          name
          childImageSharp {
            gatsbyImageData(
              width: 2000,
              quality: 90,
              layout: CONSTRAINED,
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`;

export default function Portfolio({ data }) {
  // 폴더별로 이미지를 그룹화
  const groupedImages = data.allFile.edges.reduce((acc, { node }) => {
    const folder = node.relativeDirectory.split('/').pop();
    if (!acc[folder]) {
      acc[folder] = [];
    }
    acc[folder].push(node);
    return acc;
  }, {});

  // 폴더 이름 앞의 숫자를 기준으로 역순으로 정렬
  const sortedFolders = Object.keys(groupedImages).sort((a, b) => {
    const numA = parseInt(a.match(/^\d+/)[0], 10);
    const numB = parseInt(b.match(/^\d+/)[0], 10);
    return numB - numA;
  });

  return (
    <Layout>
      <Container>
        {sortedFolders.map((folder, index) => (
          <div key={index} className="folder-container">
            <h2>{folder}</h2>
            <Row>
              {groupedImages[folder].map((imageNode, idx) => {
                const image = getImage(imageNode.childImageSharp.gatsbyImageData);
                return (
                  <Col key={idx} xs={12} className="image-col">
                    <GatsbyImage image={image} alt={imageNode.name} className="portfolio-image" />
                  </Col>
                );
              })}
            </Row>
          </div>
        ))}
      </Container>
    </Layout>
  );
}