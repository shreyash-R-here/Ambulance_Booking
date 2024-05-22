import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardComponent = () => {
  const cardData = [
    {
      imageUrl: 'https://i.ibb.co/p15k38F/Screenshot-2024-05-21-180501.png',
      title: 'Shreyash Raut',
      text: 'His dedication and meticulous approach to problem-solving and passion for clean code make him an invaluable member of our team.'
    },
    {
      imageUrl: 'https://i.ibb.co/C9WJfLm/Whats-App-Image-2024-05-21-at-5-58-40-PM.jpg',
      title: 'Anuj Shrivastava',
      text: 'His ability to translate complex requirements into seamless user journeys ensures our applications are functional, engaging and easy to use.'
    },
    {
      imageUrl: 'https://i.ibb.co/LxN5NFf/Whats-App-Image-2024-05-21-at-6-01-56-PM.jpg',
      title: 'Buddhabhushan Ankush',
      text: 'His comprehensive understanding of the entire development lifecycle enables him to contribute effectively across various stages of our projects.'
    }
  ];

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        {cardData.map((card, index) => (
          <Col key={index} className="mb-4 d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={card.imageUrl} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardComponent;
