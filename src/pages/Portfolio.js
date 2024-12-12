import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/common/Layout";
import { Container } from 'react-bootstrap';
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
              quality: 100,
              layout: FULL_WIDTH,
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`;

const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

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
            <h1 className="portfolio-title">{folder}</h1>            
            {groupedImages[folder].map((imageNode, idx) => {
              const image = getImage(imageNode.childImageSharp.gatsbyImageData);
              return (
                <GatsbyImage image={image} alt={imageNode.name} className="portfolio-image" />
              );
            })}            
          </div>
        ))}
      </Container>
      <button className="scroll-to-top" onClick={handleScrollToTop}>▲</button>
    </Layout>
  );
}

export const Head = () => (
  <>
    <title>스퀘어 퍼니시스 - 납품실적</title>
    <meta name="description" content="스퀘어퍼니시스의 납품정보를 확인해보세요." />
  </>
)