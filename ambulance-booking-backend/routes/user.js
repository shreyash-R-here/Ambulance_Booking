
// import express from 'express';
// import User from '../models/User.js';

// const router = express.Router();

// router.put('/update/:userId', async (req, res) => {
//   const { name, email, age, gender, contact, address } = req.body;
//   try {
//     const user = await User.findById(req.params.userId);
//     if (!user) {
//       return res.status(404).json({ msg: 'User not found' });
//     }

//     if (name) user.name = name;
//     if (email) user.email = email;
//     if (age) user.age = age;
//     if (gender) user.gender = gender;
//     if (contact) user.contact = contact;
//     if (address) user.address = address;

//     await user.save();

//     res.json(user);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// export default router;


import express from 'express';
import User from '../models/User.js';  // Import User model

const router = express.Router();

// Update user information
router.put('/update/:userId', async (req, res) => {
  const { name, email, age, gender, contact, address } = req.body;
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    if (name) user.name = name;
    if (email) user.email = email;
    if (age) user.age = age;
    if (gender) user.gender = gender;
    if (contact) user.contact = contact;
    if (address) user.address = address;

    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;
