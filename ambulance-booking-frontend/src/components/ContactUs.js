// ContactUs.js
import React from 'react';
import { Container } from 'react-bootstrap';
import CardComponent from './Card';

const ContactUs = () => (
  <Container className="mt-5">
    <CardComponent/>
    <h2>Contact Us</h2>
    <p>Email: contact@ambulance-ease.com</p>
    <p>Phone: 123-456-7890</p>
    <p>Address: AmbulanceEase, 1234 Ambulance St, Mumbai City, Maharashtra</p>
  </Container>
);

export default ContactUs;

 