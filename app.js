const express = require('express');
const app = express();

const verifyJWT = require('./src/middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const userRoutes = require('./src/routes/userRoutes');
const mongoose = require('mongoose');
const connectDB = require('./src/config/db');
// const { testDbConnection } = require('./src/config/db.js');

const port = 3000;

// connect MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/users', userRoutes(userService));

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(port, () => console.log(`Server is running on the port ${port}`));
});
