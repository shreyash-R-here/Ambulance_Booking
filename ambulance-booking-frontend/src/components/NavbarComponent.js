
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("token");
    console.log("Token removed from local storage");
    navigate("/login");
    // navigate('/');
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand as={Link} to="/">
          AmbulanceEase
        </Navbar.Brand> */}
        <img
            src="https://i.ibb.co/3yFr7dm/ambulance-logo-free-vector-removebg-preview.png"
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="Ambulance Logo"
          />
        <Navbar.Brand as={Link} to="/">
          
          &nbsp; AmbulanceEase
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/Main">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/book-ambulance">
              Book Ambulance
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              Profile
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact-us">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Button variant="outline-danger" onClick={handleLogout}>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
