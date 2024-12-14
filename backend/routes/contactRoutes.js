const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Handle contact form submissions
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'your-email@example.com', // Replace with your email
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;