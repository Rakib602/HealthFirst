import React from 'react';
import { Button, Container, Image, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';



const Header = () => {
 const {user,logOut} = useAuth();
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
      <Nav.Link as={Link} to="/contactUS">Contact US</Nav.Link>
      {user?.email ?
      <Button onClick={logOut} variant="success">Log Out</Button>:
      <Nav.Link as={Link} to="/login">Log In</Nav.Link>
    }
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
      {
        user.email? <Navbar.Text>
        {user.displayName}
        
        <Image className="ms-3" style={{width:30}} src={user.photoURL} roundedCircle />
        
      </Navbar.Text>
       
      :
      <Navbar.Text>
        
      </Navbar.Text>
      }
      
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
        </div>
    );
};

export default Header;