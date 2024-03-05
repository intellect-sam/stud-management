const User = require('../../models/user');
const bcrypt = require('bcrypt');

class RegisterService {
  static async createUser(userData) {
    // Check if the user already exists
    const existingUser = await User.findOne({
      email: userData.email,
    }).exec();

    if (existingUser) {
      throw new Error(`User ${userData.email} already exists`);
    }

    // Create the user
    const hashedPass = await bcrypt.hash(userData.password, 10);
    const createdUser = await User.create({
      ...userData,
      password: hashedPass,
    });

    return createdUser;
  }
}

module.exports = { RegisterService };
