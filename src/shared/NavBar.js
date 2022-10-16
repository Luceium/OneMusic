import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/shared.css';



class NavBar extends Component {
    render() {
        return(
          <Navbar>
            <Container>
              <Navbar.Brand style={{ fontFamily: "Raleway, sans-serif", fontWeight: "900" }} href="/#/home">ONEMUSIC</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Nav>
                  <Nav.Link style={{ fontFamily: "Roboto Mono, sans-serif", color: "#00008b" }} class="navSelf" href="/#/music">music</Nav.Link>
                  <Nav.Link style={{ fontFamily: "Roboto Mono, sans-serif", color: "#00008b" }} href="/">about us</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    }
}

export default NavBar;
