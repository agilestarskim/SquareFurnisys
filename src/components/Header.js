import * as React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../images/logo.png';

export default function Header() {
  const navLinkStyle = { fontSize: '18px', fontWeight: 'bold' };
  const navStyle = { width: "100%", justifyContent: "space-between", padding: "0 8rem" };

  return (
    <Navbar expand="lg" className="h-10" style={{minHeight: '100px'}}>
      <Container>
        <Image src={logo} fluid width="250px" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={navStyle}>
            <Nav.Link href="#Product" style={navLinkStyle}>제품정보</Nav.Link>
            <Nav.Link href="#Design" style={navLinkStyle}>디자인</Nav.Link>
            <Nav.Link href="#Portfolio" style={navLinkStyle}>납품실적</Nav.Link>
            <Nav.Link href="#Customer" style={navLinkStyle}>고객지원</Nav.Link>
            <Nav.Link href="#About" style={navLinkStyle}>회사소개</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}