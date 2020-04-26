import React from 'react';
// import ReactDOM from "react-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">DwayneTheFreelancer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/about">About Me</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Header;
