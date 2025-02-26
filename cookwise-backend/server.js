
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require("cors"); // ✅ Import CORS

const app = express();
app.use(cors()); // ✅ Enable CORS globally
app.use(express.json()); // Middleware to parse incoming JSON data

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/cookwise', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const User = require('./models/User');


// Signup Route
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: 'User already exists' });

  // Create a new user
  const newUser = new User({ email, password });
  await newUser.save();

  // Generate JWT token
  const token = jwt.sign({ userId: newUser._id }, 'yourSecretKey', { expiresIn: '1h' });

  res.status(201).json({ message: 'User registered successfully', token });
});

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'User not found' });

  // Compare passwords
  const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  // Generate JWT token
  const token = jwt.sign({ userId: user._id }, 'yourSecretKey', { expiresIn: '1h' });

  res.json({ message: 'Login successful', token });
});
