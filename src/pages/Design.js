import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/common/Layout";
import { Container, Row, Col } from 'react-bootstrap';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import './Design.css';

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "designImages" },
        extension: { eq: "webp" }        
      }
    ) {
      edges {
        node {
          relativeDirectory
          name
          childImageSharp {
            gatsbyImageData(
              width: 2000,
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

export default function Design({ data }) {
  const [activeIndices, setActiveIndices] = useState([]);

  const handleToggle = (index) => {
    setActiveIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 폴더별로 이미지를 그룹화
  const groupedImages = data.allFile.edges.reduce((acc, { node }) => {
    const folder = node.relativeDirectory.split('/').pop();
    if (!acc[folder]) {
      acc[folder] = [];
    }
    acc[folder].push(node);
    return acc;
  }, {});

  const items = Object.keys(groupedImages).map((folder) => {
    const title = folder;
    const images = groupedImages[folder].map(img => getImage(img.childImageSharp.gatsbyImageData));
    const thumbnailIndex = groupedImages[folder].findIndex(img => img.name === "thumbnail");
    const thumbnail = images.splice(thumbnailIndex, 1)[0]; // 썸네일을 배열에서 제거하고 변수에 저장
    images.unshift(thumbnail); // 썸네일을 배열의 첫 번째 요소로 추가
    return { title, images };
  });

  // 타이틀 앞의 숫자를 기준으로 정렬
  items.sort((a, b) => {
    const numA = parseInt(a.title.match(/^\d+/)[0], 10);
    const numB = parseInt(b.title.match(/^\d+/)[0], 10);
    return numA - numB;
  });

  return (
    <Layout>
      <Container>
        {items.map((item, index) => (
          <div key={index} className="item-container">
            <div className="item-header" onClick={() => handleToggle(index)}>
              <GatsbyImage image={item.images[0]} alt={item.title} className="item-image" />
              <h2>{item.title}</h2>
            </div>
            <div className={`dropdown-content ${activeIndices.includes(index) ? 'show' : ''}`}>
              <Row>
                {item.images.map((relatedImage, idx) => (
                  <Col key={idx} xl={12}>
                    <GatsbyImage image={relatedImage} alt={`Related ${idx}`} className="related-image" />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        ))}                
      </Container>      
      <button className="scroll-to-top" onClick={handleScrollToTop}>▲</button>
    </Layout>
  );
}

export const Head = () => (
  <>
    <title>스퀘어 퍼니시스 - 디자인</title>
    <meta name="description" content="디자인" />
  </>
)