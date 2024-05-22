import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'

const Footer = () => (
  <footer className="footer bg-secondary mt-auto">
    <Container fluid>
      <Row className="py-3">
        <Col className="text-center">
          <Link to="/contact-us" style={{ color: 'white' }}>Contact Us</Link><br></br>
          <Link to="/about-us" style={{ color: 'white' }}>About Us</Link><br></br> | © 2024 AmbulanceEase - Ambulance Booking | All Rights Reserved |
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;

