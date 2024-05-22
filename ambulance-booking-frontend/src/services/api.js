// // import axios from 'axios';

// // const API_URL = 'http://localhost:5000/api';

// // const apiClient = axios.create({
// //   baseURL: API_URL,
// // });

// // apiClient.interceptors.response.use(
// //   response => response,
// //   error => {
// //     console.error('API error:', error);
// //     return Promise.reject(error);
// //   }
// // );

// // export const signup = async (name, email, password) => {
// //   const response = await apiClient.post('/auth/signup', { name, email, password });
// //   return response.data;
// // };

// // export const login = async (email, password) => {
// //   const response = await apiClient.post('/auth/login', { email, password });
// //   return response.data;
// // };

// // export const bookAmbulance = async (ambulanceId, token) => {
// //   const response = await apiClient.post('/bookings/book', { ambulanceId }, {
// //     headers: { Authorization: `Bearer ${token}` }
// //   });
// //   return response.data;
// // };

// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api';

// const apiClient = axios.create({
//   baseURL: API_URL,
// });

// apiClient.interceptors.response.use(
//   response => response,
//   error => {
//     console.error('API error:', error);
//     return Promise.reject(error);
//   }
// );

// // Function to retrieve authentication token from local storage
// const getToken = () => {
//   return localStorage.getItem('token');
// };

// // Function to get configuration object with Authorization header
// const getConfig = () => {
//   const token = getToken();
//   return {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
// };

// // Signup API request
// export const signup = async (name, email, password) => {
//   const response = await apiClient.post('/auth/signup', { name, email, password });
//   return response.data;
// };

// // Login API request
// export const login = async (email, password) => {
//   const response = await apiClient.post('/auth/login', { email, password });
//   return response.data;
// };

// // Get user profile API request
// export const getProfile = async (userId) => {
//   try {
//     // const response = await apiClient.get('/auth/profile', getConfig());
//     const response = await apiClient.get(`/profile/${userId}`, getConfig());
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// // Book ambulance API request
// export const bookAmbulance = async (ambulanceId) => {
//   try {
//     const response = await apiClient.post('/bookings/addData', { ambulanceId }, getConfig());
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// // Get bookings API request
// export const getBookings = async () => {
//   try {
//     const response = await apiClient.get('/bookings', getConfig());
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// // Cancel booking API request
// export const cancelBooking = async (id) => {
//   try {
//     const response = await apiClient.delete(`/bookings/${id}`, getConfig());
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const getAvailableAmbulances = async () => {
//   try {
//     const response = await apiClient.get('/vehicles');
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// const userId = localStorage.getItem('userId'); // Adjust as needed to get the user ID

// if (userId) {
//   getProfile(userId)
//     .then(profile => console.log(profile))
//     .catch(error => console.error(error));
// } else {
//   console.error('User ID not found in local storage');
// }

import axios from 'axios';

const API_URL = 'http://localhost:5000/api';  // Base URL for the API

const apiClient = axios.create({
  baseURL: API_URL,
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error('API error:', error);
    return Promise.reject(error);
  }
);

// Function to retrieve authentication token from local storage
const getToken = () => {
  return localStorage.getItem('token');
};

// Function to get configuration object with Authorization header
const getConfig = () => {
  const token = getToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// Signup API request
export const signup = async (name, email, password) => {
  const response = await apiClient.post('/auth/signup', { name, email, password });
  return response.data;
};

// Login API request
export const login = async (email, password) => {
  const response = await apiClient.post('/auth/login', { email, password });
  return response.data;
};

// Get user profile API request
export const getProfile = async (userId) => {
  // export const getProfile = async () => {
  try {
    const response = await apiClient.get(`/auth/profile/${userId}`, getConfig());
    return response.data;
  } catch (error) {
    console.error('Get profile error:', error);
    throw error;
  }
};

// Book ambulance API request
export const bookAmbulance = async (ambulanceId) => {
  try {
    const response = await apiClient.post('/bookings/book', { ambulanceId }, getConfig());
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get bookings API request
export const getBookings = async () => {
  try {
    const response = await apiClient.get('/bookings', getConfig());
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Cancel booking API request
export const cancelBooking = async (id) => {
  try {
    const response = await apiClient.delete(`/bookings/${id}`, getConfig());
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get available ambulances API request
export const getAvailableAmbulances = async () => {
  try {
    const response = await apiClient.get('/vehicles');
    return response.data;
  } catch (error) {
    throw error;
  }
};

const userId = localStorage.getItem('userId');  // Adjust as needed to get the user ID

if (userId) {
  getProfile(userId)
    .then(profile => console.log(profile))
    .catch(error => console.error(error));
} else {
  console.error('User ID not found in local storage');
}

export default apiClient;