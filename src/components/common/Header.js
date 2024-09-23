import * as React from "react";
import { Link } from "gatsby";
import { Container, Nav, Navbar, Image }from 'react-bootstrap';
import logo from '../../images/logo.png';
import './Header.css'; // 추가된 CSS 파일을 임포트합니다.

export default function Header() {
  const navLinkStyle = { fontSize: '18px', fontWeight: 'bold' };

  return (
    <Navbar expand="lg" className="h-10" style={{minHeight: '100px'}}>      
        <Link to="/">
          <Image src={logo} fluid width="250px" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-style">
            <Link to="/product" className="nav-link" style={navLinkStyle}>제품정보</Link>
            <Link to="/Design" className="nav-link" style={navLinkStyle}>디자인</Link>
            <Link to="/Portfolio" className="nav-link" style={navLinkStyle}>납품실적</Link>
            <Link to="/Customer" className="nav-link" style={navLinkStyle}>고객지원</Link>
            <Link to="/About" className="nav-link" style={navLinkStyle}>회사소개</Link>
          </Nav>
        </Navbar.Collapse>      
    </Navbar>
  );
}