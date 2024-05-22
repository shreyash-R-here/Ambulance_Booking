// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarComponent from './components/NavbarComponent';
import Main from './components/Main';
import BookAmbulance from './components/BookAmbulance';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import './App.css';



const App = () => (
  <Router>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/*" element={<PrivateRoutes />} />
    </Routes>
  </Router>
);

const PrivateRoutes = () => (
  <>
    <NavbarComponent />
    <Routes>
      <Route path="/Main" element={<Main />} />
      <Route path="/book-ambulance" element={<BookAmbulance />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    <Footer />
  </>
);

export default App;
