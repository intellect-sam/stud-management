const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  role: {
    type: Number,
    default: 8150,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  refreshToken: String,
  loginCode: Number,
});
