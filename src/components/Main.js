import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";

export default function Main() {
    return (
        <Container className="bg-white text-center main-container">
            <div className="bg-blueberry hero-container d-flex justify-content-center align-items-center">
                <div className="">
                    <Image
                        fluid
                        className="img-container hero-icon"
                        src="./media/boba.png"
                    />
                    <h1>Welcome to Bubbles</h1>
                    <h4>Delicious & fun receipe for your favorite boba!</h4>
                </div>
            </div>
            <Container className="px-0">
                <Row className="text-center img-container">
                    <Col md={4} className="px-0">
                        <a href="boba">
                            <Image
                                fluid
                                className="img-container img-effect"
                                src="https://cdn.dribbble.com/users/5538196/screenshots/16890691/media/6f821250ba68a4a353d7423563dba650.png?compress=1&resize=1200x900&vertical=top"
                            />
                        </a>
                        <h4 className="mt-2 mb-5 text-blueberry">
                            What is Boba?
                        </h4>
                    </Col>
                    <Col md={4} className="px-0">
                        <a href="/how">
                            <Image
                                fluid
                                className="img-container img-effect"
                                src="https://cdn.dribbble.com/users/81239/screenshots/8089955/media/11107a5133151ba1858a374857022c1c.png?compress=1&resize=1200x900&vertical=top"
                            />
                        </a>
                        <h4 className="mt-2 mb-5 text-blueberry">
                            Bubble Tea Preparation
                        </h4>
                    </Col>
                    <Col md={4} className="px-0">
                        <a href="/list">
                            <Image
                                fluid
                                className="img-container img-effect"
                                src="https://cdn.dribbble.com/users/1027161/screenshots/7098572/media/41adc8ed4ad77e673532693cde3c223e.png?compress=1&resize=1200x900&vertical=top"
                            />
                        </a>
                        <h4 className="mt-2 mb-5 text-blueberry">
                            See our list of Bobas
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col md={8} className="about-container p-5">
                        <Image
                            fluid
                            className="img-container profile-img"
                            src="./media/IMG_0344.png"
                        />
                        <h4 className="mt-4 text-blueberry">About Bubbles</h4>
                        <p className="px-5 pt-4">
                            Bubbles is a portfolio project by Soo Hwangbo for
                            Nucamp Coding Bootcamp. It is built on ReactJS with
                            bootstrap framework.
                        </p>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </Container>
    );
}
