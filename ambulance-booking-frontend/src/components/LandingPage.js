import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/landingPage.css'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-image">
        <Container>
          <Row>
            <Col md={6} className="text-center">
              <div className="welcome-message">
                <h2>Welcome to our Ambulance Booking Web-Application</h2>
                <h1>AmbulanceEase</h1>
                <Link to="/login">
                  <Button variant="primary" className="rounded-pill mr-3">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="secondary" className="rounded-pill">Sign Up</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
