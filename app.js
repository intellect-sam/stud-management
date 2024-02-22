const express = require('express');
const register = require('./src/routes/auth/register');
const { sequelize, testDbConnection } = require('./src/config/db');
const User = require('./src/models/user');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/register', register);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
});
