import React, { useState } from 'react';
import { graphql, Link } from "gatsby";
import Layout from "../components/common/Layout";
import { Container, Carousel } from 'react-bootstrap';
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
              height: 500,                                   
              quality: 100,
              layout: CONSTRAINED,
              placeholder: BLURRED,
              transformOptions: {fit: CONTAIN, cropFocus: CENTER}            
            )
          }
        }
      }
    }
  }
`;

export default function Design({ data }) {
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

  
  const [selectedItem, setSelectedItem] = useState(null);
  const [carouselIndices, setCarouselIndices] = useState(Array(items.length).fill(0));

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const handleThumbnailClick = (carouselIndex, imageIndex) => {
    const newIndices = [...carouselIndices];
    newIndices[carouselIndex] = imageIndex;
    setCarouselIndices(newIndices);
  };

  const handleCarouselSelect = (carouselIndex, selectedIndex) => {
    const newIndices = [...carouselIndices];
    newIndices[carouselIndex] = selectedIndex;
    setCarouselIndices(newIndices);
  };

  return (
    <Layout>
      <Container>
        <div className="content-container">
          <div className="list-container">
            {items.map((item, index) => (
              <div key={index}>
                <Link to={`#${item.title}`} className={`list-item ${selectedItem === index ? 'active' : ''}`}
                onClick={() => handleItemClick(index)}>{item.title}          
                </Link>           
              </div>
            ))}
          </div>

          <div className="picture-container">
            {items.map((item, index) => (
              <div id={item.title} key={index} className="company-container">
                <p className="company-title">{item.title}</p>
                <Carousel 
                  data-bs-theme="dark" 
                  className="carousel-container"
                  activeIndex={carouselIndices[index]}
                  onSelect={(selectedIndex) => handleCarouselSelect(index, selectedIndex)}
                >
                  {item.images.map((image, idx) => (
                    <Carousel.Item>                      
                        <GatsbyImage 
                          image={image} 
                          alt={`Related ${idx}`} 
                          className="d-block w-100 banner-image"
                          objectFit="contain"
                        />         
                    </Carousel.Item>
                  ))}
                </Carousel>
                <div className="thumbnail-container">
                  {item.images.map((image, idx) => (
                    <div key={idx} className="thumbnail-wrapper" onClick={() => handleThumbnailClick(index, idx)}>
                      <GatsbyImage 
                        key={idx}
                        image={image} 
                        alt={`Thumbnail ${idx}`} 
                        className="thumbnail-img"  
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>   
          </div>                 
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