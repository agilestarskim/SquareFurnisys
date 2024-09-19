import * as React from "react"
import { Link } from "gatsby";
import Layout from "../../components/common/Layout"
import { Container, Row, Col } from 'react-bootstrap'
import CardView from "../../components/common/CardView";
import "./index.css";

const Showroom = () => {
  const seriesList = ["Expand", "Nuevo", "Space", "Bistro", "Grade 1", "Topline"];

  const renderTitle = (title) => {
    return (
      <h1 style={{fontWeight:"bold"}}>
        <span className="blue-letter">{title.charAt(0)}</span>
        {title.slice(1)}
      </h1>
    );
  };

  return (
    <Layout>
      <Container>
      <Row className="mt-5">
          <Col>
            {renderTitle("Show Room")}                        
            <h5>SquareFurnisys의 대표가구들을 3D로 만나보세요.</h5>
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