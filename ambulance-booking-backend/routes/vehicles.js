// import express from 'express';
// import Ambulance from '../models/Ambulance.js';

// const router = express.Router();

// router.get('/', async (req, res) => {
//   try {
//     const vehicles = await Ambulance.find({ available: true });
//     res.json(vehicles);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// export default router;

import express from 'express';
import Ambulance from '../models/Ambulance.js';  // Import Ambulance model

const router = express.Router();

// Get all available ambulances
router.get('/', async (req, res) => {
  try {
    const vehicles = await Ambulance.find({ available: true });
    res.json(vehicles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
