const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const config = require('./src/config/config');
const UserService = require('./src/services/userService');
const userRoutes = require('./src/routes/auth/userRoutes');

const app = express();
const port = 3000;

// Initialize Sequelize
const sequelize = new Sequelize(config.development);

// Load models
const User = require('./src/models/user')(sequelize, DataTypes);

// Sync the models with the database
sequelize.sync();

// Create services
const userService = new UserService(User);

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/users', userRoutes(userService));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
// testDbConnection().then(() => {});
