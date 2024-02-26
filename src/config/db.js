require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '5432',
    dialect: 'postgres',
  }
);

// Test the connection
const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection established successfully');
  } catch (error) {
    console.error('Connection error: ' + error);
  }
};

module.exports = { sequelize, testDbConnection, DataTypes };
