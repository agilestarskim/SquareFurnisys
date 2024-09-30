import * as React from "react"
import { Link } from "gatsby";
import Layout from "../../components/common/Layout"
import { Container, Row, Col } from 'react-bootstrap'
import CardView from "../../components/common/CardView";
import "./index.css";

const Showroom = () => {
  const seriesList = [
    { title: "Expand", description: "효율적이고 확장 가능한 워크스테이션" },
    { title: "Nuevo", description: "이동과 확장 배치가 자유로운 워크스테이션"},
    { title: "Space", description: "자유로운 배치와 다양한 확장규격이 가능한 워크스테이션" },
    { title: "Bistro", description: "프리미엄 디자인의 임원용 책상" },
    { title: "Grade 1", description: "고급스러운 임원용 책상" },
    { title: "Topline", description: "최고급 임원용 책상" },
  ];

  return (
    <Layout>
      <Container fluid className="p-0 showroom-container">
        <Container className="py-5">
          <Row>
            <Col>
              <h1 className="showroom-title">Show Room</h1>
              <p className="showroom-description">SquareFurnisys의 대표가구들을 3D로 만나보세요.</p>            
            </Col>
          </Row>
          <Row className="mt-5">
            {seriesList.map((series) => (
              <React.Fragment key={series}>              
                  <Col lg={4} className="mb-5">
                    <Link to={`${series.title}`} style={{ textDecoration: 'none' }}>
                      <CardView                  
                        imageUrl={`/models/${series.title}/thumbnail.png`}
                        title={series.title}
                        description={series.description}
                      />
                    </Link>
                  </Col>                                                    
              </React.Fragment>
            ))}
          </Row>   
        </Container> 
      </Container>
    </Layout>
  );
}

export default Showroom;