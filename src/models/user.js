// models/userModel.js
const { DataTypes } = require('sequelize');
const Joi = require('joi');
const userSchema = require('../validation/userValidation');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Basic email validation using Sequelize
        customValidation(value) {
          // Custom validation using Joi
          const { error } = userSchema.validate({ email: value });
          if (error) {
            throw new Error(error.details[0].message);
          }
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return User;
};
