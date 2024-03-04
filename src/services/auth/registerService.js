const User = require('../../models/user');

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
    const createdUser = await User.create(userData);

    return createdUser;
  }
}

module.exports = { RegisterService };
