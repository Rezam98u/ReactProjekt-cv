// import express from 'express'
// import connectDB from '../mongodb'
// import User from '../models/user'

// const router = express.Router();

// connectDB();

// router.post('/postUser', async(req, res) => {
//     const { email, password } = req.body;

//     try {
//         const newItem = new User({ email, password });
//         await newItem.save();
//         res.status(201).json({ message: 'Item added successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error adding item' });
//     }
// });

// module.exports = router;