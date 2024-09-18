import * as React from "react"
import { Link } from "gatsby";
import Layout from "../../components/common/Layout"
import { Container, Row, Col } from 'react-bootstrap'
import CardView from "../../components/common/CardView";

const Showroom = () => {
  const seriesList = ["Expand", "Nuevo", "Space", "Bistro", "Grade 1", "Topline"];

  return (
    <Layout>
      <Container>
      <Row className="mt-5">
          <Col>
            <h1>Square Furnisys 쇼룸에 오신 것을 환영합니다.</h1>
            <p>제품 시리즈를 선택 후 마우스를 이용해 모든 각도에서 제품을 감상하세요</p>
          </Col>
        </Row>
        <Row className="mt-5">
        {seriesList.map((series) => (
          <React.Fragment key={series}>              
              <Col lg={4} className="mb-5">
                <Link to={`${series}`} style={{ textDecoration: 'none' }}>
                  <CardView                  
                    imageUrl={`/models/${series}/thumbnail.png`}
                    title={series}
                    description={series}
                  />
                </Link>
              </Col>                                                    
          </React.Fragment>
        ))}
        </Row>    
      </Container>
    </Layout>
  );
}

export default Showroom;