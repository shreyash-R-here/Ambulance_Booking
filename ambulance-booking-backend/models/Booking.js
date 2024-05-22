// import mongoose from 'mongoose';

// const bookingSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   ambulanceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ambulance', required: true },
//   address: { type: String, required: true },
//   date: { type: Date, default: Date.now },
// }, { timestamps: true });

// const Booking = mongoose.model('Booking', bookingSchema, 'bookings'); 

// export default Booking;

import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  vehicleNumber: { type: String, required: true },
  driverName: { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: String, required: true },
  bookedOn: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;