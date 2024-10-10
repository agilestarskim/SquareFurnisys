import React from 'react';
import './Popup.css'; // Popup 컴포넌트의 스타일을 정의하는 CSS 파일을 임포트합니다.
import logo from '../../images/logo.webp'; // 로고 이미지를 임포트합니다.
import { Container, Row, Col, Button } from 'react-bootstrap'; // Bootstrap 컴포넌트를 임포트합니다.

const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <Container className="popup-content" onClick={(e) => e.stopPropagation()}>
        <Row className="justify-content-center mb-4">
          <Col xs="auto">
            <img src={logo} alt="Square Furnisys Logo" className="popup-logo" />
          </Col>
        </Row>
        <Row>
          <Col>                                    
            <p>• 상담번호 : <span className='highlight'>031-972-3025</span></p>
            <p>• 팩스번호 : <span className='highlight'>031-972-3026</span></p>
            <p>• 메일 : squarefurnisys@naver.com</p>
            <p>• 경기도 고양시 덕양구 향동로 201 (향동동) <br/>&nbsp;&nbsp;&nbsp;1104호 / 1152호 (GL메트로시티 향동)</p>
            <p>• 평일 08:30 ~ 17:30 / 점심시간 12:30~13:30</p>
            <p>• (토, 일, 공휴일 휴무)</p>            
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col xs="auto">
            <Button variant="secondary" onClick={onClose}>닫기</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Popup;