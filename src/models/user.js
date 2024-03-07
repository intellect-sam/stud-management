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
  timeAndDateIn: { type: Date, default: Date.now },
  timeAndDateOut: { type: Date, default: Date.now },
});

const CheckInOut = mongoose.model('CheckInOut', checkInOutSchema);

module.exports = {
  User,
  CheckInOut,
};
