import React from "react";
import {Container, Row, Image, Col, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function List({bobaUrl}) {
  const apiUrl = bobaUrl.bobas;
  console.log(apiUrl);
  const RenderData = () => {
    const listItems = apiUrl.map((item, key) => {
      return (
        <Col
          key={item.id}
          md={6}
          lg={4}
          className="my-3 card-width text-center card-container">
          <Card className="masonry-brick">
            <Link to={`${item.id}`}>
              <Image src={item.img} className="boba-img" />
            </Link>
            <Card.Body>
              <Card.Title></Card.Title>
              <h5>{item.name}</h5>
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col md={8}>
            <h1 className="my-5">Boba List</h1>
            <Row>{listItems}</Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  };
  return (
    <Container className="page-container bg-white">
      <RenderData />
    </Container>
  );
}
