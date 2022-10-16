import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


class NavBar extends Component {
    render() {
        return(
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand href="#home">OneMusic</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    }
}

export default NavBar;
