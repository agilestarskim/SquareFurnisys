import React from "react";
import "./Products.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import workstationImg from "../images/products-workstation.png";
import executiveImg from "../images/products-executive.png";
import partitionImg from "../images/products-partition.png";
import storageImg from "../images/products-storage.png";
import tableImg from "../images/products-table.png";

export default function Products() {
    const images = [
        workstationImg,
        executiveImg,
        partitionImg,
        storageImg,
        tableImg
    ];

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={12} className="g-5 mb-4">
                    <h1 className="text-center">Product</h1>
                    <h4 className="text-center text-muted">제품정보</h4>
                </Col>
            </Row>
            <Row xs={1} md={2} lg={3} className="g-5 justify-content-center">
                {images.map((image, idx) => (
                    <Col key={idx}>                    
                        <Card className="custom-card hover-zoom">
                            <Card.Img 
                                variant="top" 
                                src={image} 
                                style={{ 
                                    height: "300px", 
                                    width: "100%", 
                                    objectFit: "cover" 
                                }}
                            />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}