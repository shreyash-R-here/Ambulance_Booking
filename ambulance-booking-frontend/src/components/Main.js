// import React from 'react';

// function Main() {
//   return (
    
//     <div>
//       <h1>Welcome to Ambulance Booking Service</h1>
//       <p>Book an ambulance quickly and easily.</p>
//     </div>
//   );
// }

// export default Main;

// src/components/Main.js
import React from 'react';
import { Carousel, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Image from 'react-bootstrap/Image';
import '../styles/Main.css';
import WhyChooseUs from './WhyChooseUs';


const Main = () => (
  <Container className="mt-4">
    <Carousel>
      <Carousel.Item>
        {/* <img */}
        <img
          className="d-block w-100"
          // src="https://via.placeholder.com/800x400"
          src="https://i.pinimg.com/564x/43/4c/34/434c34301de4b85fe32be68ae2120b4f.jpg"
            // src="https://i.pinimg.com/564x/da/b9/31/dab9313c145a2b855ea6e4069393f391/test-800x400.jpg"
          alt="We Protect"
        />
        <Carousel.Caption>
          <h3>We Protect Your Lives</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          // src="https://via.placeholder.com/800x400"
          src="https://i.pinimg.com/564x/ae/18/1d/ae181d554b81dfc04e4f1f2e608fb3a9.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>We Promise Fastest Services</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/f3/29/4b/f3294b555eca8111d4fcdd0bc2d3d29f.jpg"
          
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Skilled Professionals at your Service</h3>
          {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="text-center mt-4">
      <Button as={Link} to="/book-ambulance" variant="primary">Book Ambulance Now</Button>
    </div>
    <WhyChooseUs/>
  </Container>
);

export default Main;
