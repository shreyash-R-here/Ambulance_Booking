import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Ambulance from './models/Ambulance.js';

const seedAmbulances = async () => {
  let connection;

  try {
    connection = await connectDB();

    console.log('Seeding ambulances...');

    // Seed ambulances
    const ambulancesData = [
      { vehicleNumber: 'AB123', driverName: 'Sushant Kadam' },
      { vehicleNumber: 'CD456', driverName: 'Ajay Mane' },
      { vehicleNumber: 'EF789', driverName: 'Babu Yadav' },
    ];
    await Ambulance.deleteMany();
    await Ambulance.insertMany(ambulancesData);

    console.log('Ambulances seeded successfully');
  } catch (error) {
    console.error('Error seeding ambulances:', error.message);
  } finally {
    // if (connection) {
      if (mongoose.connection.readyState === 1) {
        await mongoose.connection.close();
    }
  }
};

seedAmbulances();
