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
  password: {
    type: String,
    required: true,
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  // refreshToken: String,
  loginCode: Number,
});

const User = mongoose.model('User', userSchema);

const checkInOutSchema = new Schema({
  email: String,
  timeAndDateIn: { type: Date, default: null },
  timeAndDateOut: { type: Date, default: null },
});

const CheckInOut = mongoose.model('CheckInOut', checkInOutSchema);

module.exports = {
  User,
  CheckInOut,
};
