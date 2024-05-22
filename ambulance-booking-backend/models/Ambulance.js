import mongoose from 'mongoose';

const ambulanceSchema = new mongoose.Schema({
  vehicleNumber: { type: String, required: true, unique: true },
  driverName: { type: String, required: true },
  available: { type: Boolean, default: true },
}, { timestamps: true });

const Ambulance = mongoose.model('Ambulance', ambulanceSchema, 'ambulances');

export default Ambulance;
