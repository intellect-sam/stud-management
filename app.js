const express = require('express');
const { sequelize, testDbConnection } = require('./src/cors/config/db');
const User = require('./src/cors/models/user');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
});
