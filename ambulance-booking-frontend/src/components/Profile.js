// // // // // import React, { useEffect, useState } from 'react';
// // // // // import axios from 'axios';

// // // // // function Profile() {
// // // // //   const [user, setUser] = useState({});
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState(null);

// // // // //   useEffect(() => {
// // // // //     const fetchUserData = async () => {
// // // // //       const token = localStorage.getItem('token');
// // // // //       if (token) {
// // // // //         try {
// // // // //           const response = await axios.get('http://localhost:5000/api/auth/profile', {
// // // // //             headers: { Authorization: `Bearer ${token}` },
// // // // //           });
// // // // //           setUser(response.data);
// // // // //         } catch (error) {
// // // // //           setError('Error fetching user data');
// // // // //         } finally {
// // // // //           setLoading(false);
// // // // //         }
// // // // //       }
// // // // //     };

// // // // //     fetchUserData();
// // // // //   }, []);

// // // // //   if (loading) return <p>Loading...</p>;
// // // // //   if (error) return <p>{error}</p>;

// // // // //   return (
// // // // //     <div>
// // // // //       <h1>Profile</h1>
// // // // //       <p>Name: {user.name}</p>
// // // // //       <p>Email: {user.email}</p>
// // // // //       <div>
// // // // //         <h3>Bookings:</h3>
// // // // //         {/* Display bookings if available */}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Profile;

// // // // // // src/components/Profile.js
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { Container, Row, Col, Table, Button, Modal } from 'react-bootstrap';
// // // // // import axios from 'axios';
// // // // // import { toast } from 'react-toastify';

// // // // // const Profile = () => {
// // // // //   const [user, setUser] = useState({});
// // // // //   const [bookings, setBookings] = useState([]);
// // // // //   const [showModal, setShowModal] = useState(false);
// // // // //   const [bookingToCancel, setBookingToCancel] = useState(null);

// // // // //   useEffect(() => {
// // // // //     const fetchData = async () => {
// // // // //       try {
// // // // //         const userResponse = await axios.get('http://localhost:5000/api/auth/profile');
// // // // //         setUser(userResponse.data);
// // // // //         const bookingsResponse = await axios.get('http://localhost:5000/api/bookings');
// // // // //         setBookings(bookingsResponse.data);
// // // // //       } catch (error) {
// // // // //         console.error(error);
// // // // //       }
// // // // //     };

// // // // //     fetchData();
// // // // //   }, []);

// // // // //   const handleCancel = async () => {
// // // // //     try {
// // // // //       await axios.delete(`http://localhost:5000/api/bookings/${bookingToCancel._id}`);
// // // // //       setBookings(bookings.filter(booking => booking._id !== bookingToCancel._id));
// // // // //       toast.success('Booking cancelled successfully');
// // // // //       setShowModal(false);
// // // // //     } catch (error) {
// // // // //       console.error(error);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <Container className="mt-5">
// // // // //       <Row>
// // // // //         <Col md={6}>
// // // // //           <h2>User Information</h2>
// // // // //           <p><strong>Name:</strong> {user.name}</p>
// // // // //           <p><strong>Email:</strong> {user.email}</p>
// // // // //           <Button variant="outline-primary" onClick={() => {/* handle update */}}>Update Info</Button>
// // // // //         </Col>
// // // // //       </Row>
// // // // //       <Row className="mt-4">
// // // // //         <Col>
// // // // //           <h2>Bookings</h2>
// // // // //           <Table striped bordered hover>
// // // // //             <thead>
// // // // //               <tr>
// // // // //                 <th>#</th>
// // // // //                 <th>Ambulance ID</th>
// // // // //                 <th>Actions</th>
// // // // //               </tr>
// // // // //             </thead>
// // // // //             <tbody>
// // // // //               {bookings.map((booking, index) => (
// // // // //                 <tr key={booking._id}>
// // // // //                   <td>{index + 1}</td>
// // // // //                   <td>{booking.ambulanceId}</td>
// // // // //                   <td>
// // // // //                     <Button
// // // // //                       variant="danger"
// // // // //                       onClick={() => {
// // // // //                         setBookingToCancel(booking);
// // // // //                         setShowModal(true);
// // // // //                       }}
// // // // //                     >
// // // // //                       Cancel
// // // // //                     </Button>
// // // // //                   </td>
// // // // //                 </tr>
// // // // //               ))}
// // // // //             </tbody>
// // // // //           </Table>
// // // // //         </Col>
// // // // //       </Row>

// // // // //       <Modal show={showModal} onHide={() => setShowModal(false)}>
// // // // //         <Modal.Header closeButton>
// // // // //           <Modal.Title>Confirm Cancellation</Modal.Title>
// // // // //         </Modal.Header>
// // // // //         <Modal.Body>Are you sure you want to cancel this booking?</Modal.Body>
// // // // //         <Modal.Footer>
// // // // //           <Button variant="secondary" onClick={() => setShowModal(false)}>
// // // // //             No
// // // // //           </Button>
// // // // //           <Button variant="primary" onClick={handleCancel}>
// // // // //             Yes
// // // // //           </Button>
// // // // //         </Modal.Footer>
// // // // //       </Modal>
// // // // //     </Container>
// // // // //   );
// // // // // };

// // // // // export default Profile;

// // // // import React, { useState, useEffect } from 'react';
// // // // import { Container, Row, Col, Table, Button, Modal } from 'react-bootstrap';
// // // // import axios from 'axios';
// // // // import { toast } from 'react-toastify';

// // // // const Profile = () => {
// // // //   const [user, setUser] = useState({});
// // // //   const [bookings, setBookings] = useState([]);
// // // //   const [showModal, setShowModal] = useState(false);
// // // //   const [bookingToCancel, setBookingToCancel] = useState(null);

// // // //   useEffect(() => {
// // // //     const fetchData = async () => {
// // // //       try {
// // // //         // Fetch user profile data
// // // //         const userResponse = await axios.get('http://localhost:5000/api/auth/profile', {
// // // //           headers: {
// // // //             Authorization: `Bearer ${localStorage.getItem('token')}`,
// // // //           },
// // // //         });
// // // //         console.log('User Data:', userResponse.data);
// // // //       setUser(userResponse.data);

// // // //         // Fetch bookings data
// // // //         const bookingsResponse = await axios.get('http://localhost:5000/api/bookings', {
// // // //           headers: {
// // // //             Authorization: `Bearer ${localStorage.getItem('token')}`,
// // // //           },
// // // //         });
// // // //         setBookings(bookingsResponse.data);
// // // //       } catch (error) {
// // // //         console.error('Error fetching profile data:', error);
// // // //         toast.error('Failed to load profile data');
// // // //       }
// // // //     };

// // // //     fetchData();
// // // //   }, []);

// // // //   const handleCancel = async () => {
// // // //     try {
// // // //       await axios.delete(`http://localhost:5000/api/bookings/${bookingToCancel._id}`, {
// // // //         headers: {
// // // //           Authorization: `Bearer ${localStorage.getItem('token')}`,
// // // //         },
// // // //       });
// // // //       setBookings(bookings.filter(booking => booking._id !== bookingToCancel._id));
// // // //       toast.success('Booking cancelled successfully');
// // // //       setShowModal(false);
// // // //     } catch (error) {
// // // //       console.error('Error cancelling booking:', error);
// // // //       toast.error('Failed to cancel booking');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <Container className="mt-5">
// // // //       <Row>
// // // //         <Col md={6}>
// // // //           <h2>User Information</h2>
// // // //           <p><strong>Name:</strong> {user.name}</p>
// // // //           <p><strong>Email:</strong> {user.email}</p>
// // // //           <Button variant="outline-primary" onClick={() => {/* handle update */}}>Update Info</Button>
// // // //         </Col>
// // // //       </Row>
// // // //       <Row className="mt-4">
// // // //         <Col>
// // // //           <h2>Bookings</h2>
// // // //           <Table striped bordered hover>
// // // //             <thead>
// // // //               <tr>
// // // //                 <th>#</th>
// // // //                 <th>Ambulance ID</th>
// // // //                 <th>Actions</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {bookings.map((booking, index) => (
// // // //                 <tr key={booking._id}>
// // // //                   <td>{index + 1}</td>
// // // //                   <td>{booking.ambulanceId}</td>
// // // //                   <td>
// // // //                     <Button
// // // //                       variant="danger"
// // // //                       onClick={() => {
// // // //                         setBookingToCancel(booking);
// // // //                         setShowModal(true);
// // // //                       }}
// // // //                     >
// // // //                       Cancel
// // // //                     </Button>
// // // //                   </td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </Table>
// // // //         </Col>
// // // //       </Row>

// // // //       <Modal show={showModal} onHide={() => setShowModal(false)}>
// // // //         <Modal.Header closeButton>
// // // //           <Modal.Title>Confirm Cancellation</Modal.Title>
// // // //         </Modal.Header>
// // // //         <Modal.Body>Are you sure you want to cancel this booking?</Modal.Body>
// // // //         <Modal.Footer>
// // // //           <Button variant="secondary" onClick={() => setShowModal(false)}>
// // // //             No
// // // //           </Button>
// // // //           <Button variant="primary" onClick={handleCancel}>
// // // //             Yes
// // // //           </Button>
// // // //         </Modal.Footer>
// // // //       </Modal>
// // // //     </Container>
// // // //   );
// // // // };

// // // // export default Profile;

// // // // import React, { useState, useEffect } from 'react';
// // // // import { Container, Row, Col, Table, Button, Form, Modal } from 'react-bootstrap';
// // // // import axios from 'axios';
// // // // import { toast } from 'react-toastify';

// // // // const Profile = () => {
// // // //   const [user, setUser] = useState({});
// // // //   const [bookings, setBookings] = useState([]);
// // // //   const [showEditModal, setShowEditModal] = useState(false);
// // // //   const [editFormData, setEditFormData] = useState({ name: '', email: '', age: '', gender: '', contact: '', address: '' });

// // // //   useEffect(() => {
// // // //     const fetchProfile = async () => {
// // // //       try {
// // // //         const response = await axios.get('http://localhost:5000/api/auth/profile');
// // // //         setUser(response.data);
// // // //         setEditFormData(response.data);
// // // //       } catch (error) {
// // // //         console.error(error);
// // // //       }
// // // //     };

// // // //     const fetchBookings = async () => {
// // // //       try {
// // // //         const response = await axios.get('http://localhost:5000/api/bookings');
// // // //         setBookings(response.data);
// // // //       } catch (error) {
// // // //         console.error(error);
// // // //       }
// // // //     };

// // // //     fetchProfile();
// // // //     fetchBookings();
// // // //   }, []);

// // // //   const handleEditInputChange = (e) => {
// // // //     setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleEditSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       await axios.put('http://localhost:5000/api/user/update', editFormData);
// // // //       toast.success('Profile updated successfully');
// // // //       setShowEditModal(false);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     }
// // // //   };

// // // //   const handleDeleteBooking = async (id) => {
// // // //     try {
// // // //       await axios.delete(`http://localhost:5000/api/bookings/${id}`);
// // // //       setBookings(bookings.filter((booking) => booking._id !== id));
// // // //       toast.success('Booking deleted successfully');
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <Container className="mt-5">
// // // //       <Row className="justify-content-md-center">
// // // //         <Col md={8}>
// // // //           <div className="p-4 rounded shadow-sm bg-light">
// // // //             <h2 className="mb-4 text-center">User Profile</h2>
// // // //             <p><strong>Name:</strong> {user.name}</p>
// // // //             <p><strong>Email:</strong> {user.email}</p>
// // // //             <p><strong>Age:</strong> {user.age}</p>
// // // //             <p><strong>Gender:</strong> {user.gender}</p>
// // // //             <p><strong>Contact:</strong> {user.contact}</p>
// // // //             <p><strong>Address:</strong> {user.address}</p>
// // // //             <Button variant="primary" onClick={() => setShowEditModal(true)}>Update Info</Button>
// // // //           </div>
// // // //         </Col>
// // // //       </Row>

// // // //       <Row className="mt-5 justify-content-md-center">
// // // //         <Col md={8}>
// // // //           <div className="p-4 rounded shadow-sm bg-light">
// // // //             <h2 className="mb-4 text-center">My Bookings</h2>
// // // //             <Table striped bordered hover>
// // // //               <thead>
// // // //                 <tr>
// // // //                   <th>Vehicle Number</th>
// // // //                   <th>Driver Name</th>
// // // //                   <th>Address</th>
// // // //                   <th>Booked On</th>
// // // //                   <th>Action</th>
// // // //                 </tr>
// // // //               </thead>
// // // //               <tbody>
// // // //                 {bookings.map((booking) => (
// // // //                   <tr key={booking._id}>
// // // //                     <td>{booking.ambulanceId.vehicleNumber}</td>
// // // //                     <td>{booking.ambulanceId.driverName}</td>
// // // //                     <td>{booking.address}</td>
// // // //                     <td>{new Date(booking.date).toLocaleString()}</td>
// // // //                     <td>
// // // //                       <Button variant="danger" onClick={() => handleDeleteBooking(booking._id)}>Delete</Button>
// // // //                     </td>
// // // //                   </tr>
// // // //                 ))}
// // // //               </tbody>
// // // //             </Table>
// // // //           </div>
// // // //         </Col>
// // // //       </Row>

// // // //       <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
// // // //         <Modal.Header closeButton>
// // // //           <Modal.Title>Update Profile</Modal.Title>
// // // //         </Modal.Header>
// // // //         <Modal.Body>
// // // //           <Form onSubmit={handleEditSubmit}>
// // // //             <Form.Group controlId="formName">
// // // //               <Form.Label>Name</Form.Label>
// // // //               <Form.Control type="text" name="name" value={editFormData.name} onChange={handleEditInputChange} />
// // // //             </Form.Group>
// // // //             <Form.Group controlId="formEmail">
// // // //               <Form.Label>Email</Form.Label>
// // // //               <Form.Control type="email" name="email" value={editFormData.email} onChange={handleEditInputChange} />
// // // //             </Form.Group>
// // // //             <Form.Group controlId="formAge">
// // // //               <Form.Label>Age</Form.Label>
// // // //               <Form.Control type="number" name="age" value={editFormData.age} onChange={handleEditInputChange} />
// // // //             </Form.Group>
// // // //             <Form.Group controlId="formGender">
// // // //               <Form.Label>Gender</Form.Label>
// // // //               <Form.Control as="select" name="gender" value={editFormData.gender} onChange={handleEditInputChange}>
// // // //                 <option value="male">Male</option>
// // // //                 <option value="female">Female</option>
// // // //                 <option value="other">Other</option>
// // // //               </Form.Control>
// // // //             </Form.Group>
// // // //             <Form.Group controlId="formContact">
// // // //               <Form.Label>Contact</Form.Label>
// // // //               <Form.Control type="text" name="contact" value={editFormData.contact} onChange={handleEditInputChange} />
// // // //             </Form.Group>
// // // //             <Form.Group controlId="formAddress">
// // // //               <Form.Label>Address</Form.Label>
// // // //               <Form.Control type="text" name="address" value={editFormData.address} onChange={handleEditInputChange} />
// // // //             </Form.Group>
// // // //             <Button variant="primary" type="submit" block>
// // // //               Save Changes
// // // //             </Button>
// // // //           </Form>
// // // //         </Modal.Body>
// // // //       </Modal>
// // // //     </Container>
// // // //   );
// // // // };

// // // // export default Profile;

// // // import React, { useState, useEffect } from 'react';
// // // import { Container, Row, Col, Table, Button, Form, Modal } from 'react-bootstrap';
// // // import axios from 'axios';
// // // import { toast } from 'react-toastify';

// // // const Profile = () => {
// // //   const [user, setUser] = useState({});
// // //   const [bookings, setBookings] = useState([]);
// // //   const [showEditModal, setShowEditModal] = useState(false);
// // //   const [editFormData, setEditFormData] = useState({ name: '', email: '', age: '', gender: '', contact: '', address: '' });

// // //   useEffect(() => {
// // //     const fetchProfile = async () => {
// // //       try {
// // //         const token = localStorage.getItem('token');
// // //         const response = await axios.get('http://localhost:5000/api/auth/profile', {
// // //           headers: { Authorization: `Bearer ${token}` }
// // //         });
// // //         setUser(response.data);
// // //         setEditFormData(response.data);
// // //       } catch (error) {
// // //         console.error(error);
// // //       }
// // //     };

// // //     const fetchBookings = async () => {
// // //       try {
// // //         const token = localStorage.getItem('token');
// // //         const response = await axios.get('http://localhost:5000/api/bookings', {
// // //           headers: { Authorization: `Bearer ${token}` }
// // //         });
// // //         setBookings(response.data);
// // //       } catch (error) {
// // //         console.error(error);
// // //       }
// // //     };

// // //     fetchProfile();
// // //     fetchBookings();
// // //   }, []);

// // //   const handleEditInputChange = (e) => {
// // //     setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleEditSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const token = localStorage.getItem('token');
// // //       await axios.put('http://localhost:5000/api/user/update', editFormData, {
// // //         headers: { Authorization: `Bearer ${token}` }
// // //       });
// // //       toast.success('Profile updated successfully');
// // //       setShowEditModal(false);
// // //       setUser(editFormData); // Update local user state
// // //     } catch (error) {
// // //       console.error(error);
// // //       toast.error('Failed to update profile');
// // //     }
// // //   };

// // //   const handleDeleteBooking = async (id) => {
// // //     try {
// // //       const token = localStorage.getItem('token');
// // //       await axios.delete(`http://localhost:5000/api/bookings/${id}`, {
// // //         headers: { Authorization: `Bearer ${token}` }
// // //       });
// // //       setBookings(bookings.filter((booking) => booking._id !== id));
// // //       toast.success('Booking deleted successfully');
// // //     } catch (error) {
// // //       console.error(error);
// // //       toast.error('Failed to delete booking');
// // //     }
// // //   };

// // //   return (
// // //     <Container className="mt-5">
// // //       <Row className="justify-content-md-center">
// // //         <Col md={8}>
// // //           <div className="p-4 rounded shadow-sm bg-light">
// // //             <h2 className="mb-4 text-center">User Profile</h2>
// // //             <p><strong>Name:</strong> {user.name}</p>
// // //             <p><strong>Email:</strong> {user.email}</p>
// // //             <p><strong>Age:</strong> {user.age}</p>
// // //             <p><strong>Gender:</strong> {user.gender}</p>
// // //             <p><strong>Contact:</strong> {user.contact}</p>
// // //             <p><strong>Address:</strong> {user.address}</p>
// // //             <Button variant="primary" onClick={() => setShowEditModal(true)}>Update Info</Button>
// // //           </div>
// // //         </Col>
// // //       </Row>

// // //       <Row className="mt-5 justify-content-md-center">
// // //         <Col md={8}>
// // //           <div className="p-4 rounded shadow-sm bg-light">
// // //             <h2 className="mb-4 text-center">My Bookings</h2>
// // //             <Table striped bordered hover>
// // //               <thead>
// // //                 <tr>
// // //                   <th>Vehicle Number</th>
// // //                   <th>Driver Name</th>
// // //                   <th>Address</th>
// // //                   <th>Booked On</th>
// // //                   <th>Action</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {bookings.map((booking) => (
// // //                   <tr key={booking._id}>
// // //                     <td>{booking.ambulanceId.vehicleNumber}</td>
// // //                     <td>{booking.ambulanceId.driverName}</td>
// // //                     <td>{booking.address}</td>
// // //                     <td>{new Date(booking.date).toLocaleString()}</td>
// // //                     <td>
// // //                       <Button variant="danger" onClick={() => handleDeleteBooking(booking._id)}>Delete</Button>
// // //                     </td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </Table>
// // //           </div>
// // //         </Col>
// // //       </Row>

// // //       <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
// // //         <Modal.Header closeButton>
// // //           <Modal.Title>Update Profile</Modal.Title>
// // //         </Modal.Header>
// // //         <Modal.Body>
// // //           <Form onSubmit={handleEditSubmit}>
// // //             <Form.Group controlId="formName">
// // //               <Form.Label>Name</Form.Label>
// // //               <Form.Control type="text" name="name" value={editFormData.name} onChange={handleEditInputChange} />
// // //             </Form.Group>
// // //             <Form.Group controlId="formEmail">
// // //               <Form.Label>Email</Form.Label>
// // //               <Form.Control type="email" name="email" value={editFormData.email} onChange={handleEditInputChange} />
// // //             </Form.Group>
// // //             <Form.Group controlId="formAge">
// // //               <Form.Label>Age</Form.Label>
// // //               <Form.Control type="number" name="age" value={editFormData.age} onChange={handleEditInputChange} />
// // //             </Form.Group>
// // //             <Form.Group controlId="formGender">
// // //               <Form.Label>Gender</Form.Label>
// // //               <Form.Control as="select" name="gender" value={editFormData.gender} onChange={handleEditInputChange}>
// // //                 <option value="male">Male</option>
// // //                 <option value="female">Female</option>
// // //                 <option value="other">Other</option>
// // //               </Form.Control>
// // //             </Form.Group>
// // //             <Form.Group controlId="formContact">
// // //               <Form.Label>Contact</Form.Label>
// // //               <Form.Control type="text" name="contact" value={editFormData.contact} onChange={handleEditInputChange} />
// // //             </Form.Group>
// // //             <Form.Group controlId="formAddress">
// // //               <Form.Label>Address</Form.Label>
// // //               <Form.Control type="text" name="address" value={editFormData.address} onChange={handleEditInputChange} />
// // //             </Form.Group>
// // //             <Button variant="primary" type="submit" block>
// // //               Save Changes
// // //             </Button>
// // //           </Form>
// // //         </Modal.Body>
// // //       </Modal>
// // //     </Container>
// // //   );
// // // };

// // // export default Profile;

// // import React, { useState, useEffect } from 'react';
// // import { Container, Row, Col, Table, Button, Form, Modal } from 'react-bootstrap';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';

// // const Profile = () => {
// //   const [user, setUser] = useState({});
// //   const [bookings, setBookings] = useState([]);
// //   const [showEditModal, setShowEditModal] = useState(false);
// //   const [editFormData, setEditFormData] = useState({ name: '', email: '', age: '', gender: '', contact: '', address: '' });
// //   const userId = localStorage.getItem('userId');

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:5000/api/auth/profile');
// //         setUser(response.data);
// //         setEditFormData(response.data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     const fetchBookings = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:5000/api/bookings/${userId}`);
// //         setBookings(response.data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchProfile();
// //     fetchBookings();
// //   }, [userId]);

// //   const handleEditInputChange = (e) => {
// //     setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
// //   };

// //   const handleEditSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.put('http://localhost:5000/api/user/update', editFormData);
// //       toast.success('Profile updated successfully');
// //       setShowEditModal(false);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const handleDeleteBooking = async (id) => {
// //     try {
// //       await axios.delete(`http://localhost:5000/api/bookings/${id}`);
// //       setBookings(bookings.filter((booking) => booking._id !== id));
// //       toast.success('Booking deleted successfully');
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <Container className="mt-5">
// //       <Row className="justify-content-md-center">
// //         <Col md={8}>
// //           <div className="p-4 rounded shadow-sm bg-light">
// //             <h2 className="mb-4 text-center">User Profile</h2>
// //             <p><strong>Name:</strong> {user.name}</p>
// //             <p><strong>Email:</strong> {user.email}</p>
// //             <p><strong>Age:</strong> {user.age}</p>
// //             <p><strong>Gender:</strong> {user.gender}</p>
// //             <p><strong>Contact:</strong> {user.contact}</p>
// //             <p><strong>Address:</strong> {user.address}</p>
// //             <Button variant="primary" onClick={() => setShowEditModal(true)}>Update Info</Button>
// //           </div>
// //         </Col>
// //       </Row>

// //       <Row className="mt-5 justify-content-md-center">
// //         <Col md={8}>
// //           <div className="p-4 rounded shadow-sm bg-light">
// //             <h2 className="mb-4 text-center">My Bookings</h2>
// //             <Table striped bordered hover>
// //               <thead>
// //                 <tr>
// //                   <th>Vehicle Number</th>
// //                   <th>Driver Name</th>
// //                   <th>Address</th>
// //                   <th>Booked On</th>
// //                   <th>Action</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {bookings.map((booking) => (
// //                   <tr key={booking._id}>
// //                     <td>{booking.ambulanceId.vehicleNumber}</td>
// //                     <td>{booking.ambulanceId.driverName}</td>
// //                     <td>{booking.address}</td>
// //                     <td>{new Date(booking.date).toLocaleString()}</td>
// //                     <td>
// //                       <Button variant="danger" onClick={() => handleDeleteBooking(booking._id)}>Cancel</Button>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </Table>
// //           </div>
// //         </Col>
// //       </Row>

// //       <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
// //         <Modal.Header closeButton>
// //           <Modal.Title>Edit Profile</Modal.Title>
// //         </Modal.Header>
// //         <Modal.Body>
// //           <Form onSubmit={handleEditSubmit}>
// //             <Form.Group controlId="formName">
// //               <Form.Label>Name</Form.Label>
// //               <Form.Control
// //                 type="text"
// //                 name="name"
// //                 value={editFormData.name}
// //                 onChange={handleEditInputChange}
// //               />
// //             </Form.Group>
// //             <Form.Group controlId="formEmail">
// //               <Form.Label>Email</Form.Label>
// //               <Form.Control
// //                 type="email"
// //                 name="email"
// //                 value={editFormData.email}
// //                 onChange={handleEditInputChange}
// //               />
// //             </Form.Group>
// //             <Form.Group controlId="formAge">
// //               <Form.Label>Age</Form.Label>
// //               <Form.Control
// //                 type="number"
// //                 name="age"
// //                 value={editFormData.age}
// //                 onChange={handleEditInputChange}
// //               />
// //             </Form.Group>
// //             <Form.Group controlId="formGender">
// //               <Form.Label>Gender</Form.Label>
// //               <Form.Control
// //                 type="text"
// //                 name="gender"
// //                 value={editFormData.gender}
// //                 onChange={handleEditInputChange}
// //               />
// //             </Form.Group>
// //             <Form.Group controlId="formContact">
// //               <Form.Label>Contact</Form.Label>
// //               <Form.Control
// //                 type="text"
// //                 name="contact"
// //                 value={editFormData.contact}
// //                 onChange={handleEditInputChange}
// //               />
// //             </Form.Group>
// //             <Form.Group controlId="formAddress">
// //               <Form.Label>Address</Form.Label>
// //               <Form.Control
// //                 type="text"
// //                 name="address"
// //                 value={editFormData.address}
// //                 onChange={handleEditInputChange}
// //               />
// //             </Form.Group>
// //             <Button variant="primary" type="submit">
// //               Save Changes
// //             </Button>
// //           </Form>
// //         </Modal.Body>
// //       </Modal>
// //     </Container>
// //   );
// // };

// // export default Profile;

// // components/Profile.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Profile = () => {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/bookings');
//         setBookings(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchBookings();
//   }, []);

//   const handleDeleteBooking = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/bookings/${id}`);
//       setBookings(bookings.filter((booking) => booking._id !== id));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>My Bookings</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Vehicle Number</th>
//             <th>Driver Name</th>
//             <th>Address</th>
//             <th>Contact</th>
//             <th>Booked On</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((booking) => (
//             <tr key={booking._id}>
//               <td>{booking.vehicleNumber}</td>
//               <td>{booking.driverName}</td>
//               <td>{booking.address}</td>
//               <td>{booking.contact}</td>
//               <td>{new Date(booking.bookedOn).toLocaleString()}</td>
//               <td>
//                 <button onClick={() => handleDeleteBooking(booking._id)}>Cancel</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Profile;

// // Profile.js
// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import axios from 'axios';

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const userId = localStorage.getItem('userId'); // Assuming userId is stored in localStorage after login

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/users/${userId}`);
//         setUser(response.data);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, [userId]);

//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-md-center">
//         <Col md={6}>
//           <div className="p-4 rounded shadow-sm bg-light">
//             <h2 className="mb-4 text-center">User Profile</h2>
//             {user ? (
//               <div>
//                 <p>Name: {user.name}</p>
//                 <p>Email: {user.email}</p>
//                 {/* Add other user information fields here */}
//                 <p>Age: {user.age}</p>
//                 <p>Address: {user.address}</p>
//                 {/* Add more fields as needed */}
//               </div>
//             ) : (
//               <p>Loading user information...</p>
//             )}
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// // export default Profile;

// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import axios from 'axios';
// import { getProfile } from '../services/api';

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const userId = localStorage.getItem('userId');
//       if (!userId) {
//         console.error('No userId found in localStorage');
//         return;
//       }
//       try {
//         // const response = await axios.get(`http://localhost:5000/api/users/${userId}`);
//         const userData = await getProfile();
//         setUser(userData);
//         // setUser(response.data);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, [userId]);

//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-md-center">
//         <Col md={6}>
//           <div className="p-4 rounded shadow-sm bg-light">
//             <h2 className="mb-4 text-center">User Profile</h2>
//             {user ? (
//               <div>
//                 <p>Name: {user.name}</p>
//                 <p>Email: {user.email}</p>
//                 <p>Age: {user.age}</p>
//                 <p>Address: {user.address}</p>
//                 <p>Gender: {user.gender}</p>
//                 <p>Contact: {user.contact}</p>
//               </div>
//             ) : (
//               <p>Loading user information...</p>
//             )}
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getProfile, getBookings, cancelBooking } from '../services/api'

const Profile = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userData = await getProfile(); // Fetch user profile
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    const fetchBookingsData = async () => {
      try {
        const bookingsData = await getBookings(); // Fetch user's bookings
        setBookings(bookingsData);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookingsData();
  }, []);

  const handleDeleteBooking = async (id) => {
    try {
      await cancelBooking(id); // Cancel the booking with the specified id
      setBookings(bookings.filter((booking) => booking._id !== id)); // Remove the cancelled booking from the state
    } catch (error) {
      console.error('Error cancelling booking:', error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <div className="p-4 rounded shadow-sm bg-light">
            <h2 className="mb-4 text-center">User Profile</h2>
            {user ? (
              <div>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Age: {user.age}</p>
                <p>Address: {user.address}</p>
                <p>Gender: {user.gender}</p>
                <p>Contact: {user.contact}</p>
              </div>
            ) : (
              <p>Loading user information...</p>
            )}
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <div className="p-4 rounded shadow-sm bg-light mt-5">
            <h2 className="mb-4 text-center">My Bookings</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Vehicle Number</th>
                  <th>Driver Name</th>
                  <th>Address</th>
                  <th>Contact</th>
                  <th>Booked On</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td>{booking.vehicleNumber}</td>
                    <td>{booking.driverName}</td>
                    <td>{booking.address}</td>
                    <td>{booking.contact}</td>
                    <td>{new Date(booking.bookedOn).toLocaleString()}</td>
                    <td>
                      <button onClick={() => handleDeleteBooking(booking._id)}>Cancel</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
