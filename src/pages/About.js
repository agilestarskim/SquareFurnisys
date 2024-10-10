import React from "react";
import Layout from "../components/common/Layout";
import { Container, Row, Col } from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image";
import './About.css';

export default function About() {
  function onClick() {
    window.open("https://map.naver.com/p/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EA%B3%A0%EC%96%91%EC%8B%9C%20%EB%8D%95%EC%96%91%EA%B5%AC%20%ED%96%A5%EB%8F%99%EB%A1%9C%20201/address/14125523.4262625,4524114.2468537,%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EA%B3%A0%EC%96%91%EC%8B%9C%20%EB%8D%95%EC%96%91%EA%B5%AC%20%ED%96%A5%EB%8F%99%EB%A1%9C%20201,new?searchType=address&isCorrectAnswer=true&c=15.00,0,0,0,dh", "_blank")
  }

  return (
    <Layout>
      <Container fluid>        
        <Row className="row-container">
          <h1 className="about-main-title">Square Furnisys</h1>
        </Row>        
        <Row className="row-container">          
          <Col md={12} lg={4}>
            <h1 className="about-title">How we work</h1>                        
          </Col>
          <Col md={12} lg={8}>
            <p className="about-description">
            저희 “스퀘어 퍼니니스”는 사무실의 빈 공간을 단순히 기성제품으로 채우는 획일적인 방식에서 벗어나, 고객 맞춤형 가구 제작이라는 새로운 트렌드를 표방하는 전문 기업으로 자리매김하고자 노력하고 있습니다.
            <br/>저희는 지속적인 제품 개발과 사용자 편리성을 고려한 인체공학적 디자인에 많은 시간과 노력을 기울이고 있으며, 고객 여러분의 다양한 요구에 대응하기 위해 최선을 다하고 있습니다. 앞으로도 고객의 의뢰에 충실히 대응하고, 창의적이고 혁신적인 제품을 선보일 수 있도록 최선을 다하겠습니다.
            </p>
          </Col>          
        </Row>

        <Row className="row-container">
          <Col md={12} lg={4}>
            <h1 className="about-title">About us</h1>                        
          </Col>                    
          <Col md={12} lg={8}>
            <p className="about-description">
            저희 회사는 월드플랜 서울사무소에서 시작하여 대리점 매출 증대를 기반으로 외연을 확장해왔습니다. 그 과정에서 디자인팀과 시공팀을 개설하며 고객의 다양한 요구에 맞춘 서비스를 제공해왔으며, 보다 공격적인 영업 지원을 위해 2023년 투자 유치를 완료하고, ”주식회사 스퀘어퍼니시스” 라는 법인으로 새롭게 출범하게 되었습니다.
            </p>
          </Col>                    
        </Row>

        <Row className="row-container">
          <Col md={12} lg={4}>
            <h1 className="about-title">History</h1>                        
          </Col>                     
          <Col md={12} lg={8}>
            <p className="about-description">
            <br/>• 2018년 : 월드플랜 영업소 개설
            <br/>• 2020년 : 월드플랜 서울사무소개설 
            <br/>• 2023년 : 월드플랜 디자인 팀 및 시공팀 개설
            <br/>• 2023년 : 월드플랜 서울사무소 투자유치
            <br/>• 2023년 : 주식회사 스퀘어퍼니시스 출범
            </p>
          </Col>                   
        </Row>

        <Row className="row-container">
          <Col md={12} lg={4}>
            <h1 className="about-title">Map</h1>
            <h1 className="about-description">찾아오시는 길</h1>
            <p>지도를 클릭하면 네이버 지도로 이동합니다.</p>                        
          </Col>
          <Col md={12} lg={8} onClick={onClick} style={{ cursor: "pointer" }}>        
              <StaticImage 
                src="../images/map.webp"
                alt="map"
                className="map-image"              
              />            
          </Col>          
        </Row>        
      </Container>
    </Layout>
  );
}

export const Head = () => (
  <>
    <title>스퀘어 퍼니시스 - 소개</title>
    <meta name="description" content="소개" />
  </>
)