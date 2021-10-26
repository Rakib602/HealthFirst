import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {
 
    return (
      <div className="bg-dark">
        <div className="container">
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="/home">Health-First</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
      <Nav.Link as={Link} to="/tests">Tests</Nav.Link>
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
        </div>
    );
};

export default Header;