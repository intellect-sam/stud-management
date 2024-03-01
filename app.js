const express = require('express');
const app = express();

const cors = require('cors');
const corsOptions = require('./src/config/corsOptions');
// const verifyJWT = require('./src/middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./src/middleware/credentials');
const userRoutes = require('./src/routes/userRoutes');
const UserService = require('./src/services/userService');
const mongoose = require('mongoose');
const connectDB = require('./src/config/db');
// const { testDbConnection } = require('./src/config/db.js');

const PORT = process.env.PORT || 3000;

// connect MongoDB
connectDB();

//Handle options credentials check before CORS
// and fetch cookies credentials requirements
app.use(credentials);
app.use(cors(corsOptions));

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware for cookie
app.use(cookieParser());

const userServicesInstance = new UserService();

const userRouter = userRoutes(userServicesInstance); // Routes
app.use('/users', userRouter);

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server is running on the port ${PORT}`));
});
