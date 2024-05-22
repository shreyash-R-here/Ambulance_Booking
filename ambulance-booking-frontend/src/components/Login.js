// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { login } from '../services/api.js';

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const data = await login(email, password);
// //       localStorage.setItem('token', data.token);
// //       localStorage.setItem('user', JSON.stringify(data.user));
// //       navigate('/'); // Redirect to main page after successful login
// //     } catch (error) {
// //       console.error('Login error:', error);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
// //       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
// //       <button type="submit">Login</button>
// //     </form>
// //   );
// // };

// // export default Login;
// // // src/components/Login.js
// // import React, { useState } from 'react';
// // import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// // import axios from 'axios';
// // import { useNavigate, Link } from 'react-router-dom';
// // import { toast } from 'react-toastify';

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.post('http://localhost:5000/api/auth/login', { email, password });
// //       toast.success('Login successful');
// //       navigate('/');
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <Container className="mt-5">
// //       <Row className="justify-content-md-center">
// //         <Col md={6}>
// //           <div className="p-4 rounded shadow-sm bg-light">
// //             <h2 className="mb-4 text-center">Login</h2>
// //             <Form onSubmit={handleSubmit}>
// //               <Form.Group controlId="formBasicEmail">
// //                 <Form.Label>Email address</Form.Label>
// //                 <Form.Control
// //                   type="email"
// //                   placeholder="Enter email"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                 />
// //               </Form.Group>
// //               <Form.Group controlId="formBasicPassword">
// //                 <Form.Label>Password</Form.Label>
// //                 <Form.Control
// //                   type="password"
// //                   placeholder="Password"
// //                   value={password}
// //                   onChange={(e) => setPassword(e.target.value)}
// //                 />
// //               </Form.Group>
// //               <Button variant="primary" type="submit" block>
// //                 Login
// //               </Button>
// //             </Form>
// //             <div className="text-center mt-3">
// //               Not registered yet? <Link to="/signup">Sign Up</Link>
// //             </div>
// //           </div>
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // };
  
// // export default Login;


// // src/components/Login.js
// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
//   //     if (response.status === 200) {
//   //       toast.success('Login successful');
//   //       navigate('/Main');
//   //     }
//   //   } catch (error) {
//   //     console.error(error);
//   //     toast.error('Invalid credentials');
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
//       if (response.status === 200) {
//         // Assuming the response contains user data or a token
//         toast.success('Login successful');
//         navigate('/Main');
//       } else {
//         toast.error('Login failed');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       if (error.response && error.response.data && error.response.data.message) {
//         toast.error(error.response.data.message);
//       } else {
//         toast.error('An error occurred during login');
//       }
//     }
//   };
  
//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-md-center">
//         <Col md={6}>
//           <div className="p-4 rounded shadow-sm bg-light">
//             <h2 className="mb-4 text-center">Login</h2>
//             <Form onSubmit={handleSubmit}>
//               <Form.Group controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="Enter email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </Form.Group>
//               <Form.Group controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </Form.Group>
//               <Button variant="primary" type="submit" block>
//                 Login
//               </Button>
//             </Form>
//             <div className="text-center mt-3">
//               Not registered yet? <Link to="/signup">Sign Up</Link>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Login;
//**************************************


// // src/components/Login.js
// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// // import { login } from './ApiIntegration';


// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
//       if (response.status === 200) {
//         const { token, userId } = response.data; // Extract userId from response
//         localStorage.setItem('token', token);
//         localStorage.setItem('userId', userId); // Store userId in localStorage
//         toast.success('Login successful');
//         navigate('/profile'); // Redirect to profile page
//       } else {
//         toast.error('Login failed');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       if (error.response && error.response.data && error.response.data.message) {
//         toast.error(error.response.data.message);
//       } else {
//         toast.error('An error occurred during login');
//       }
//     }
//   };
  
//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-md-center">
//         <Col md={6}>
//           <div className="p-4 rounded shadow-sm bg-light">
//             <h2 className="mb-4 text-center">Login</h2>
//             <Form onSubmit={handleSubmit}>
//               <Form.Group controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="Enter email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </Form.Group>
//               <Form.Group controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </Form.Group>
//               <Button variant="primary" type="submit" block>
//                 Login
//               </Button>
//             </Form>
//             <div className="text-center mt-3">
//               Not registered yet? <Link to="/signup">Sign Up</Link>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Login;


//////////////////////////////////////////////////////////////////////
// src/components/Login.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../services/api';// Import login function

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      if (response) {
        const { token, userId } = response;

        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId); // Store userId in localStorage

        toast.success('Login successful');
        navigate('/Main');
      } else {
        toast.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('An error occurred during login');
      }
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <div className="p-4 rounded shadow-sm bg-light">
            <h2 className="mb-4 text-center">Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit" block>
                Login
              </Button>
            </Form>
            <div className="text-center mt-3">
              Not registered yet? <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
