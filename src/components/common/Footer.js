import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../images/logo-gray.png';
import './Footer.css'; // 추가된 CSS 파일 import

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <Container fluid className="bg-dark text-white">      
        <Row className='pt-5 align-items-center'>
          <Col sm={12} md={12} lg={3} className="text-center">            
            <img 
              src={logo} 
              alt="회사 로고" 
              className="footer-logo" 
              onClick={scrollToTop} 
              style={{ cursor: 'pointer' }} // 클릭 가능한 커서 스타일 추가
            />                
          </Col>
          <Col sm={12} md={12} lg={9} className="text-center">            
            <Row>
              <Col sm={12} md={4} lg={3} className="footer-item">
                <strong className="footer-title">상호명</strong> 
                <span className="footer-content">(주)스퀘어퍼니시스</span>
              </Col>
              <Col sm={12} md={4} lg={3} className="footer-item">
                <strong className="footer-title">대표</strong> 
                <span className="footer-content">강창구</span>
              </Col>
              <Col sm={12} md={4} lg={3} className="footer-item">
                <strong className="footer-title">사업자 등록번호</strong> 
                <span className="footer-content">491-87-02715</span>
              </Col>              
            </Row>
            <Row>
              <Col sm={12} md={4} lg={3} className="footer-item">
                <strong className="footer-title">전화번호</strong> 
                <span className="footer-content">031-972-3025</span>
              </Col>
              <Col sm={12} md={4} lg={3} className="footer-item">
                <strong className="footer-title">팩스</strong> 
                <span className="footer-content">031-972-3026</span> 
              </Col>
              <Col sm={12} md={4} lg={3} className="footer-item">
                <strong className="footer-title">메일</strong> 
                <span className="footer-content">squarefurnisys@naver.com</span>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={4} lg={3} className="footer-item"> 
                <strong className="footer-title">블로그</strong>
                <a className="footer-content" href='https://m.blog.naver.com/squarefurnisys'>blog.naver.com/squarefurnisys</a>
              </Col>
              <Col sm={12} md={4} lg={3} className="footer-item">
                <strong className="footer-title">주소</strong> 
                <span className="footer-content">경기도 고양시 덕양구 향동로 201, GL메트로시티 향동 1104호</span>
              </Col>
              <Col sm={12} md={4} lg={3} className="footer-item">                  
              </Col>              
            </Row>
          </Col>
          <Col sm={12} md={12} lg={12} className="text-center footer-content mt-3">
            <p className="fw-lighter">&copy; COPYLIGHT © SQUARE FURNISYS. ALL RIGHTS RESERVED</p>
          </Col>
        </Row>  
    </Container>
  );
}