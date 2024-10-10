import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'gatsby';
import Image from 'react-bootstrap/Image';
import logo from '../../images/logo.webp';
import Popup from './Popup'; // Popup 컴포넌트를 임포트합니다.
import './Header.css'; // 추가된 CSS 파일을 임포트합니다.

export default function Header() {
  const [showProductsSubMenu, setShowProductsSubMenu] = useState(false);
  const [showServicesSubMenu, setShowServicesSubMenu] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const navLinkStyle = { fontSize: '18px', fontWeight: 'bold' };

  const handleCustomerServiceClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Container fluid className="header-background">
      <Container>
        <Navbar expand="lg" className="h-10" style={{ minHeight: '100px' }}>
          <Link to="/">
            <Image src={logo} fluid width="250px" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-style">
              <div 
                className="nav-item"
                onMouseEnter={() => setShowProductsSubMenu(true)}
                onMouseLeave={() => setShowProductsSubMenu(false)}
              >
                <Link to="/#products" className="nav-link" style={navLinkStyle}>제품정보</Link>
                {showProductsSubMenu && (
                  <div className="sub-menu">
                    <Link to="/product/#Workstation" className="sub-nav-link">Workstation</Link>
                    <Link to="/product/#Executive" className="sub-nav-link">Executive</Link>
                    <Link to="/product/#Partition" className="sub-nav-link">Partition</Link>
                    <Link to="/product/#Storage" className="sub-nav-link">Storage</Link>
                    <Link to="/product/#Table" className="sub-nav-link">Table</Link>
                  </div>
                )}
              </div>
              <Link to="/#design-consulting" className="nav-link" style={navLinkStyle}>디자인 컨설팅</Link>
              <div 
                className="nav-item"
                onMouseEnter={() => setShowServicesSubMenu(true)}
                onMouseLeave={() => setShowServicesSubMenu(false)}
              >
                <Link to="/#square-services" className="nav-link" style={navLinkStyle}>스퀘어 서비스</Link>
                {showServicesSubMenu && (
                  <div className="sub-menu">
                    <a href="/catalog.pdf" className="sub-nav-link" target="_blank" rel="noopener noreferrer">Catalog</a>                    
                    <Link to="/showroom" className="sub-nav-link">3D Showroom</Link>
                    <Link to="/Portfolio" className="sub-nav-link">Portfolio</Link>
                  </div>
                )}
              </div>
              <div className="nav-link" style={navLinkStyle} onClick={handleCustomerServiceClick}>고객지원</div>
              <Link to="/About" className="nav-link" style={navLinkStyle}>회사소개</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      {showPopup && <Popup onClose={handleClosePopup} />}
    </Container>
  );
}