import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    date: '',
    time: '',
    partySize: 1,
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/bookings', formData)
      .then((response) => alert('Booking created!'))
      .catch((error) => alert('Error creating booking'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Table</h2>
      <input
        type="text"
        name="customerName"
        placeholder="Name"
        value={formData.customerName}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="partySize"
        min="1"
        value={formData.partySize}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;