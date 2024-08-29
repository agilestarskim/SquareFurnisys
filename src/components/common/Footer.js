import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../images/logo-gray.png';
import './Footer.css'; // 추가된 CSS 파일 import

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="align-items-center">
          <Col sm={12} md={12} lg={3} className="text-center text-md-left mb-3 mb-md-0">
            <img src={logo} alt="회사 로고" className="footer-logo" />
          </Col>
          <Col sm={12} md={12} lg={9}>
            <Row>
              <Col xs={12} md={6} lg={3} className="d-flex flex-column" >
                <div className="footer-item">
                  <strong className="footer-title">상호명</strong> 
                  <span className="footer-content">(주)스퀘어퍼니시스</span>
                </div>
                <div className="footer-item">
                  <strong className="footer-title">사업자 등록번호</strong> 
                  <span className="footer-content">491-87-02715</span>
                </div>
              </Col>
              <Col xs={12} md={6} lg={3} className="d-flex flex-column">
                <div className="footer-item">
                  <strong className="footer-title">대표</strong> 
                  <span className="footer-content">강창구</span>
                </div>
                <div className="footer-item">
                  <strong className="footer-title">팩스</strong> 
                  <span className="footer-content">031-972-3026</span>
                </div>
              </Col>
              <Col xs={12} md={6} lg={6} className="d-flex flex-column">
                <div className="footer-item">
                  <strong className="footer-title">주소</strong> 
                  <span className="footer-content">경기도 고양시 덕양구 향동로 201, GL메트로시티 향동 1102호</span>
                </div>
                <div className="footer-item">
                  <strong className="footer-title">메일</strong>
                  <span className="footer-content">sunkej@daum.net</span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="text-center footer-content mt-3">
            <p className="fw-lighter">&copy; COPYLIGHT © SQUARE FURNISYS. ALL RIGHTS RESERVED</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}