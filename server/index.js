const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
require('dotenv').config();
const DB_URI = process.env.DB_URI;

const app = express(); // Removed duplicate declaration

// Import route
const bookingsRoute = require('./routes/bookings');
app.use('/api/bookings', bookingsRoute);

// Load environment variables
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Connect to MongoDB
mongoose.connect(DB_URI);

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Routes
const menuRoutes = require('./routes/menu');
const bookingRoutes = require('./routes/bookings');

app.use('/api/menu', menuRoutes);
app.use('/api/bookings', bookingRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const eventRoutes = require('./routes/events');
app.use('/api/events', eventRoutes);