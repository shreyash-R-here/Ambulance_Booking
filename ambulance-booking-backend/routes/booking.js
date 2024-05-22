// import express from 'express';
// import Booking from '../models/Booking.js';

// const router = express.Router();

// // Create a new booking
// router.post('/addData', async (req, res) => {
//   const { vehicleNumber, driverName, address, contact } = req.body;
//   try {
//     const newBooking = new Booking({
//       vehicleNumber,
//       driverName,
//       address,
//       contact
//     });
//     await newBooking.save();
//     res.status(201).json(newBooking);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get all bookings
// router.get('/', async (req, res) => {
//   try {
//     const bookings = await Booking.find();
//     res.json(bookings);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Delete a booking
// router.delete('/:id', async (req, res) => {
//   try {
//     const booking = await Booking.findById(req.params.id);
//     if (!booking) {
//       return res.status(404).json({ message: 'Booking not found' });
//     }
//     await booking.remove();
//     res.json({ message: 'Booking removed' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;

// import express from 'express';
// import Booking from '../models/Booking.js';  // Import Booking model

// const router = express.Router();

// // Create a new booking
// router.post('/book', auth, async (req, res) => {
//   const { vehicleNumber, driverName, address, contact } = req.body;
//   try {
//     const newBooking = new Booking({
//       vehicleNumber,
//       driverName,
//       address,
//       contact
//     });
//     await newBooking.save();
//     res.status(201).json(newBooking);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get all bookings
// router.get('/', async (req, res) => {
//   try {
//     const bookings = await Booking.find();
//     res.json(bookings);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Delete a booking
// router.delete('/:id', async (req, res) => {
//   try {
//     const booking = await Booking.findById(req.params.id);
//     if (!booking) {
//       return res.status(404).json({ message: 'Booking not found' });
//     }
//     await booking.remove();
//     res.json({ message: 'Booking removed' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;
import express from 'express';
import auth from '../middleware/authMiddleware.js';  // Correctly import auth middleware
import Booking from '../models/Booking.js'; // Assuming you have a Booking model

const router = express.Router();

router.post('/book', auth, async (req, res) => {
  try {
    const { ambulanceId } = req.body;
    const userId = req.user.id; // Assuming req.user is set by auth middleware

    // Create new booking
    const newBooking = new Booking({ ambulanceId, user: userId });
    await newBooking.save();

    res.json(newBooking);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

export default router;
