const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// Get all testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add new testimonial (protected route)
router.post('/', async (req, res) => {
  const testimonial = new Testimonial({
    name: req.body.name,
    role: req.body.role,
    image: req.body.image,
    text: req.body.text,
  });

  try {
    const newTestimonial = await testimonial.save();
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;