// // // import mongoose from 'mongoose';

// // // const connectDB = async () => {
// // //   try {
// // //     await mongoose.connect('mongodb://localhost:27017/ambulanceDataB', {
// // //       useNewUrlParser: true,
// // //       useUnifiedTopology: true,
// // //     });
// // //     console.log('MongoDB connected successfully');
// // //   } catch (err) {
// // //     console.error('MongoDB connection failed:', err.message);
// // //     process.exit(1);
// // //   }
// // // };

// // // export default connectDB;


// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import Ambulance from '../models/Ambulance.js';

// dotenv.config();

// const mongoURI = process.env.MONGODB_URI;

// const connectDB = async () => {
//   try {
//     await mongoose.connect(mongoURI);

//     console.log('MongoDB Connected');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//   }
// };

// const seedAmbulances = async () => {
//   try {
//     await connectDB(); // Connect to the database before seeding

//     console.log('Seeding ambulances...');

//     // Now perform database operations like seeding
//     await Ambulance.deleteMany(); // Make sure to await this operation

//     // Seed ambulances
//     const ambulancesData = [
//       // Your ambulance data here
//     ];

//     await Ambulance.insertMany(ambulancesData);

//     console.log('Ambulances seeded successfully');
//   } catch (error) {
//     console.error('Error seeding ambulances:', error.message);
//   } finally {
//     // Close the connection after seeding
//     mongoose.connection.close();
//   }
// };

// seedAmbulances();

// export { connectDB }; // Export the connectDB function

// config/db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(mongoURI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    
    console.log('MongoDB Connected');
    
    return connection; // Return the connection object
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw error; 
  }
};

export default connectDB; 
