import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../images/logo.png";
import './NavigationMenu.css'


const NavigationMenu = () => {

  return (
    <Navbar collapseOnSelect expand="md" variant="light" fixed='top' className="container pt-3 justify-content-center">
      <Navbar.Brand as={Link} to="/home"><img src={logo} alt="" className="nav-logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto nav-bg">
          <Nav.Link as={Link} to="/home" className="active mr-4 nav-link-style">Home</Nav.Link>
          <Nav.Link as={Link} to="/destinations" className="mr-4 nav-link-style">Projects</Nav.Link>
          <Nav.Link as={Link} to="/blogs" className="mr-4 nav-link-style">Blogs</Nav.Link>
          <Nav.Link as={Link} to="/Contacts" className="mr-4 nav-link-style">Contacts</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationMenu;