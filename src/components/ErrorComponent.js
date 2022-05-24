import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";

export default function ErrorComponent() {
  return (
    <Container fluid className="bg-light text-center px-0">
      <Row className="error-container">
        <Col></Col>
        <Col>
          <Image
            fluid
            className="crying-boba-img"
            src="https://c.tenor.com/DOqW1OOK5lgAAAAi/boba-bubble.gif"
          />
          <h1>Oops! This page does not exist.</h1>
          <a href="/" className="link-style">
            Go back to homepage
          </a>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
