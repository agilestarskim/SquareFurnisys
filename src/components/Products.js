import React from "react";
import "./Products.css";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
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
                <Col xs={12}>
                    <p className="display-3 font-weight-bold text-center mb-5">Products</p>
                </Col>
            </Row>
            <Row className="justify-content-start">
                {images.map((image, idx) => (
                    <Col key={idx} xs={12} sm={12} md={6} lg={6} xl={4} className="mb-5">
                        <Card className="custom-card">
                            <Card.Img variant="top" src={image} style={{ height: "300px", width: "100%", objectFit: "cover" }}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}