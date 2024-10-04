import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import { Row, Col, Container } from 'react-bootstrap'
import "./DesignConsulting.css";
import icon from "../../images/design-consulting-icon1.png"
import icon2 from "../../images/design-consulting-icon2.png"
import icon3 from "../../images/design-consulting-icon3.png"
import icon4 from "../../images/design-consulting-icon4.png"

const DesignConsulting = () => {
    const handleNavigation = () => {
        navigate("/Design");
    };

    return (
        <Container fluid className="design-consulting-container p-3">            
            <h1 className="text-center mt-5">SQUARE DESIGN CONSULTING</h1>
            <h4 className="text-center text-muted">효율적인 오피스 공간을 위한 맞춤형 Planning Ideas 제공</h4>  
            <Container>         
                <div onClick={handleNavigation} style={{ cursor: "pointer" }}>
                    <Row>
                        <Col xs={6} md={6} xl={6} className="g-0">
                            <StaticImage 
                                src="../../images/design-consulting-left.webp" 
                                alt="Design Consulting"
                                className="left-img"
                                layout="fullWidth"
                                placeholder="blurred"
                            />
                        </Col>
                        <Col xs={6} md={6} xl={6} className="g-0">
                            <StaticImage 
                                src="../../images/design-consulting-right.webp" 
                                alt="Design Consulting"
                                className="right-img"
                                layout="fullWidth"
                                placeholder="blurred"
                            />
                        </Col>
                    </Row>                    
                                
                </div>
            </Container>
            <Container>
                <Row>
                    <Col xs={6} md={4} xl={3}>
                        <DesignConsultingCard
                            src={icon}
                            title="효울적인 설계"
                            description="고객의 공간에 맞는 여러가지 디자인 검토를 통해서 업무효율이 극대화 될 수 있는 공간을 설계 합니다."
                        />
                    </Col>                    
                    <Col xs={6} md={4} xl={3}>
                        <DesignConsultingCard
                            src={icon2}
                            title="사전 디자인 확인"
                            description="사무환경의 다양한 변화 유연하게 대응 하기 위해서는 사전 디자인 확인이 중요 합니다."                        
                        />
                    </Col>
                    <Col xs={6} md={4} xl={3}>
                        <DesignConsultingCard
                            src={icon3}
                            title="경험과 생산성"
                            description="Square Furnisys는 고객의 니즈를 실현시킬 경험과 높은 생산성을 갖추고  있습니다."
                        />
                    </Col>
                    <Col xs={6} md={4} xl={3}>
                        <DesignConsultingCard
                            src={icon4}
                            title="정확한 일정"
                            description="공간 다자인과 제품설계, 생산, 시공까지 모든 과정을 물 흐르듯 자연스럽게 일정에 맞춰서 진행이 가능 합니다. "
                        />
                    </Col>
                </Row>  
            </Container>
            <div className="text-center">
                <button 
                className="learn-more-button" 
                onClick={handleNavigation}
                >더 알아보기 &nbsp; &gt; 
                </button>
            </div>
        </Container>
    );
}

function DesignConsultingCard ({ src, title, description }) {
    return (
        <div className="consulting-custom-card">
            <img src={src} alt="Design Consulting" className="consulting-card-img"/> 
        <div className="consulting-card-body">
            <p className="consulting-card-title">{title}</p>
            <p className="consulting-card-text text-left text-muted">{description}</p>
        </div>
    </div>
    );
}

export default DesignConsulting;