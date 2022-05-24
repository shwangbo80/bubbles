import React from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Container className="bg-taro pt-2">
        <Navbar className="px-5 mx-0" expand={false}>
          <a href="/" className="link-style">
            <h4>Bubbles</h4>
          </a>
          <Navbar.Toggle aria-controls="offcanvasNavbar">
            <i className="fa fa-chevron-circle-left fa-2x"></i>
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end">
            <Offcanvas.Header closeButton className="bg-mango">
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="bg-light">
              <ul className="no-bullets mt-4">
                <Link to="/" className="link-style">
                  <li className="my-2">Home</li>
                </Link>
                <Link to="/boba" className="link-style">
                  <li className="my-2">What is Boba?</li>
                </Link>
                <Link to="/how" className="link-style">
                  <li className="my-2">How to Prepare</li>
                </Link>
                <Link to="/list" className="link-style">
                  <li className="my-2">Boba List</li>
                </Link>
              </ul>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </Container>
    </div>
  );
}
