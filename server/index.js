const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// MongoDB Schema & Model
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  subject: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// In-Memory Fallback Store (if MongoDB is connecting or disconnected)
const inMemoryMessages = [];

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.01:27017/portfolio_db';
let isMongoConnected = false;

mongoose.connect(MONGO_URI)
  .then(() => {
    isMongoConnected = true;
    console.log('✅ Connected to MongoDB Database successfully');
  })
  .catch((err) => {
    console.log('⚠️ MongoDB Connection Notice: Using secure in-memory storage fallback. Error:', err.message);
  });

// Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'eklaby12@gmail.com',
    pass: process.env.EMAIL_PASS || 'mock_app_password'
  }
});

// API Routes

// 1. Submit Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: 'All form fields are required.' });
    }

    const newMessage = {
      id: Date.now().toString(),
      name,
      email,
      subject,
      message,
      createdAt: new Date()
    };

    if (isMongoConnected) {
      const savedDoc = await Message.create({ name, email, subject, message });
      newMessage.id = savedDoc._id;
    } else {
      inMemoryMessages.unshift(newMessage);
    }

    // Try sending email notification (non-blocking)
    if (process.env.EMAIL_PASS) {
      const mailOptions = {
        from: `Portfolio Contact <${email}>`,
        to: 'eklaby12@gmail.com',
        subject: `[New Portfolio Message] ${subject}`,
        text: `You received a new message from ${name} (${email}):\n\nSubject: ${subject}\n\nMessage:\n${message}\n\nSent at: ${new Date().toLocaleString()}`
      };
      transporter.sendMail(mailOptions).catch(err => console.log('Email dispatch notice:', err.message));
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
      data: newMessage
    });
  } catch (err) {
    console.error('Contact Submission Error:', err);
    return res.status(500).json({ success: false, error: 'Server error processing message.' });
  }
});

// 2. Admin Authentication Endpoint
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  const adminUser = process.env.ADMIN_USER || 'admin';
  const adminPass = process.env.ADMIN_PASS || 'eklabay2026';

  if (username === adminUser && password === adminPass) {
    return res.json({ success: true, token: 'authenticated_admin_token_2026' });
  }
  return res.status(401).json({ success: false, error: 'Invalid admin credentials.' });
});

// 3. Admin Get All Messages Endpoint
app.get('/api/admin/messages', async (req, res) => {
  try {
    let messages = [];
    if (isMongoConnected) {
      messages = await Message.find().sort({ createdAt: -1 });
    } else {
      messages = inMemoryMessages;
    }
    return res.json({ success: true, messages });
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Error fetching messages.' });
  }
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`🚀 Portfolio Backend Server running on http://localhost:${PORT}`);
});
