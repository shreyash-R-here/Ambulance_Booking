// // // // src/components/BookAmbulance.js
// // // import React, { useState } from 'react';
// // // import { bookAmbulance } from '../services/api';

// // // const BookAmbulance = ({ token }) => {
// // //   const [ambulanceId, setAmbulanceId] = useState('');

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const data = await bookAmbulance(ambulanceId, token);
// // //       console.log('Booking successful:', data);
// // //       // Handle successful booking
// // //     } catch (error) {
// // //       console.error('Booking error:', error);
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit}>
// // //       <p>Choose Ambulance:</p>
// // //       <input type="text" placeholder="Ambulance ID" value={ambulanceId} onChange={(e) => setAmbulanceId(e.target.value)} />
// // //       <button type="submit">Book Ambulance</button>
// // //     </form>
// // //   );
// // // };

// // // // export default BookAmbulance;

// // // import React, { useState, useEffect } from 'react';
// // // import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// // // import axios from 'axios';
// // // import { useNavigate } from 'react-router-dom';
// // // import { toast } from 'react-toastify';

// // // const BookAmbulance = () => {
// // //   const [vehicleNumbers, setVehicleNumbers] = useState([]);
// // //   const [selectedVehicle, setSelectedVehicle] = useState('');
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     // Fetch vehicle numbers from the backend
// // //     const fetchVehicleNumbers = async () => {
// // //       try {
// // //         const response = await axios.get('http://localhost:5000/api/vehicles');
// // //         setVehicleNumbers(response.data);
// // //       } catch (error) {
// // //         console.error(error);
// // //       }
// // //     };

// // //     fetchVehicleNumbers();
// // //   }, []);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       // Make a booking with the selected vehicle
// // //       await axios.post('http://localhost:5000/api/bookings', { vehicleNumber: selectedVehicle });
// // //       toast.success('Booking successful');
// // //       navigate('/profile');
// // //     } catch (error) {
// // //       console.error(error);
// // //     }
// // //   };

// // //   return (
// // //     <Container className="mt-5">
// // //       <Row className="justify-content-md-center">
// // //         <Col md={6}>
// // //           <div className="p-4 rounded shadow-sm bg-light">
// // //             <h2 className="mb-4 text-center">Book Ambulance</h2>
// // //             <Form onSubmit={handleSubmit}>
// // //               <Form.Group controlId="formBasicVehicle">
// // //                 <Form.Label>Select Vehicle Number</Form.Label>
// // //                 <Form.Control as="select" value={selectedVehicle} onChange={(e) => setSelectedVehicle(e.target.value)}>
// // //                   <option value="">Select</option>
// // //                   {vehicleNumbers.map((vehicle) => (
// // //                     <option key={vehicle._id} value={vehicle.vehicleNumber}>{vehicle.vehicleNumber}</option>
// // //                   ))}
// // //                 </Form.Control>
// // //               </Form.Group>
// // //               <Button variant="primary" type="submit" block>
// // //                 Book
// // //               </Button>
// // //             </Form>
// // //           </div>
// // //         </Col>
// // //       </Row>
// // //     </Container>
// // //   );
// // // };

// // // export default BookAmbulance;

// import React, { useState, useEffect } from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const BookAmbulance = () => {
//   const [vehicles, setVehicles] = useState([]);
//   const [formData, setFormData] = useState({
//     vehicleNumber: '',
//     address: '',
//     contact: ''
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchVehicles = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/vehicles');
//         setVehicles(response.data);
//       } catch (error) {
//         console.error('Error fetching vehicles:', error);
//       }
//     };

//     fetchVehicles();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/bookings', formData);
//       toast.success('Booking successful');
//       navigate('/profile');
//     } catch (error) {
//       console.error('Error creating booking:', error);
//     }
//   };

//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-md-center">
//         <Col md={6}>
//           <div className="p-4 rounded shadow-sm bg-light">
//             <h2 className="mb-4 text-center">Book Ambulance</h2>
//             <Form onSubmit={handleSubmit}>
//               <Form.Group controlId="vehicleSelect">
//                 <Form.Label>Select Vehicle</Form.Label>
//                 <Form.Control
//                   as="select"
//                   name="vehicleNumber"
//                   value={formData.vehicleNumber}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select a vehicle</option>
//                   {vehicles.map(vehicle => (
//                     <option key={vehicle._id} value={vehicle.vehicleNumber}>
//                       {vehicle.vehicleNumber} - {vehicle.driverName}
//                     </option>
//                   ))}
//                 </Form.Control>
//               </Form.Group>
//               <Form.Group controlId="formAddress">
//                 <Form.Label>Address</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group controlId="formContact">
//                 <Form.Label>Contact</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="contact"
//                   value={formData.contact}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>
//               <Button variant="primary" type="submit" block>
//                 Book
//               </Button>
//             </Form>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

//////////////////////////////////////////////////////////////////////////////////////////
// export default BookAmbulance;
import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { bookAmbulance } from '../services/api';

const BookAmbulance = () => {
  const [vehicles, setVehicles] = useState([]);
  const [formData, setFormData] = useState({
    vehicleNumber: '',
    address: '',
    contact: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/vehicles');
        setVehicles(response.data);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };

    fetchVehicles();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await bookAmbulance(formData); 
      toast.success('Booking successful');
      navigate('/profile');
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <div className="p-4 rounded shadow-sm bg-light">
            <h2 className="mb-4 text-center">Book Ambulance</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="vehicleSelect">
                <Form.Label>Select Vehicle</Form.Label>
                <Form.Control
                  as="select"
                  name="vehicleNumber"
                  value={formData.vehicleNumber}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a vehicle</option>
                  {vehicles.map(vehicle => (
                    <option key={vehicle._id} value={vehicle.vehicleNumber}>
                      {vehicle.vehicleNumber} - {vehicle.driverName}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formContact">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" block>
                Book
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BookAmbulance;
