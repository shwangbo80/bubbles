import React from "react";
import {Container, Row, Image, Col} from "react-bootstrap";
import {useParams} from "react-router-dom";

export default function BobaMethod({bobaUrl}) {
  const {id} = useParams();
  const apiUrl = bobaUrl.bobas[id];
  console.log(apiUrl);

  const RenderData = () => {
    return (
      <Container className="bg-white method-container">
        <Row className="py-5">
          <Col></Col>
          <Col md={6}>
            <div className="mb-5">
              <Image
                fluid
                src={apiUrl.img}
                className="boba-img-container"></Image>
            </div>
            <h1 className="text-blueberry">{apiUrl.name} Boba</h1>
            <h4 className="mt-4">Ingredients</h4>
            {apiUrl.ingredients.map((item, key) => {
              return <p key={key}>{item}</p>;
            })}
            <h4 className="mt-4">Directions</h4>
            {apiUrl.directions.map((item, key) => {
              return <p key={key}>{item}</p>;
            })}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  };

  return (
    <Container className="page-container">
      <RenderData />
    </Container>
  );
}
