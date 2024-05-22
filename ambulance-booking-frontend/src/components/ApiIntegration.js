// // // src/utils/ApiIntegration.js
// // import axios from 'axios';

// // const API_URL = 'http://localhost:5000/api';

// // export const signup = async (data) => {
// //   return await axios.post(`${API_URL}/auth/signup`, data);
// // };

// // export const login = async (data) => {
// //   return await axios.post(`${API_URL}/auth/login`, data);
// // };

// // export const getProfile = async () => {
// //   return await axios.get(`${API_URL}/auth/profile`);
// // };

// // export const bookAmbulance = async (data) => {
// //   return await axios.post(`${API_URL}/bookings`, data);
// // };

// // export const getBookings = async () => {
// //   return await axios.get(`${API_URL}/bookings`);
// // };

// // export const cancelBooking = async (id) => {
// //   return await axios.delete(`${API_URL}/bookings/${id}`);
// // };

// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api';

// // to retrieve authentication token from local storage
// const getToken = () => {
//   return localStorage.getItem('token');
// };

// // to get configuration object with Authorization header
// const getConfig = () => {
//   const token = getToken();
//   return {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
// };

// // Signup 
// export const signup = async (data) => {
//   return await axios.post(`${API_URL}/auth/signup`, data);
// };

// // Login 
// export const login = async (data) => {
//   return await axios.post(`${API_URL}/auth/login`, data);
// };

// // Get userprofile API 
// export const getProfile = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/auth/profile`, getConfig());
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// // Book ambulanceAPI
// export const bookAmbulance = async (data) => {
//   try {
//     const response = await axios.post(`${API_URL}/bookings`, data, getConfig());
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// // Get bookings API request
// export const getBookings = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/bookings`, getConfig());
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// // Cancel booking API request
// export const cancelBooking = async (id) => {
//   return await axios.delete(`${API_URL}/bookings/${id}`, getConfig());
// };