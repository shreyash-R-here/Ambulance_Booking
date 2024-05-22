// // ambulance-booking-backend/server.js
// // const express = require('express');
// // import mongoose from 'mongoose';
// // const cors = require('cors');


// // const bodyParser = require('body-parser');
// // const authRoutes = require('./routes/auth');
// // const bookingRoutes = require('./routes/bookings');
// // import bodyParser from 'body-parser';

// //require('dotenv').config(); // Import the .env file
// // // server.js
// // import express from 'express';
// // import cors from 'cors';
// // import dotenv from 'dotenv';
// // import connectDB from './config/db.js';
// // import authRoutes from './routes/auth.js';
// // // import router from './routes/bookings.js';
// // import bookingRoutes from './routes/booking.js';


// // dotenv.config();
// // connectDB();

// // const app = express();
// // app.use(cors());
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));

// // app.use('/api/auth', authRoutes);
// // app.use('/api/bookings', bookingRoutes);


// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// // import connectDB from './config/db.js';
// import connectDB from './config/db.js';
// import authRoutes from './routes/auth.js';
// import bookingRoutes from './routes/booking.js';
// import userRoutes from './routes/user.js';
// import vehiclesRouter from './routes/vehicles.js';
// import authMiddleware from './middleware/authMiddleware.js';

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// app.use('/api/auth', authRoutes);
// // app.use('/api/bookings', authMiddleware, bookingRoutes);
// // app.use('/api/user', authMiddleware, userRoutes);
// app.use('/api/bookings', bookingRoutes);
// app.use('/api/user', userRoutes);
// app.use('/api/vehicles', vehiclesRouter);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// server.js ///////////////////////////////////////////////////////////
// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';
// import authRoutes from './routes/auth.js';
// // import { router as authRoutes } from './routes/auth.js';
// import bookingRoutes from './routes/booking.js';
// import userRoutes from './routes/user.js';
// import vehiclesRouter from './routes/vehicles.js';

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use('/api/auth', authRoutes);
// app.use('/api/bookings', bookingRoutes);
// app.use('/api/user', userRoutes);
// app.use('/api/vehicles', vehiclesRouter);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; 
import authRoutes from './routes/auth.js'; 
import bookingRoutes from './routes/booking.js';  
import userRoutes from './routes/user.js';  
import vehiclesRouter from './routes/vehicles.js';  

dotenv.config();  
connectDB();   

const app = express();
app.use(cors()); 
app.use(express.json());  // Parse JSON request bodies
app.use(express.urlencoded({ extended: true }));  // Parse URL-encoded request bodies

// Route handling middleware
app.use('/api/auth', authRoutes);  // Routes for authentication
app.use('/api/bookings', bookingRoutes);  // Routes for bookings
app.use('/api/user', userRoutes);  // Routes for user management
app.use('/api/vehicles', vehiclesRouter);  // Routes for vehicles

const PORT = process.env.PORT || 5000;  // Define the port number
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  // Start the server
