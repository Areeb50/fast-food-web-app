const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Create a booking
router.post('/', async (req, res) => {
  const booking = new Booking({
    customerName: req.body.customerName,
    date: req.body.date,
    time: req.body.time,
    partySize: req.body.partySize,
    email: req.body.email,
  });
  try {
    const newBooking = await booking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all bookings (admin)
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;