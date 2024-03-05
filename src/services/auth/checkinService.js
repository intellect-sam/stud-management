const User = require('../../models/user');
const bcrypt = require('bcrypt');

class CheckIn {
  static async loginUser(credentials) {
    const { email, password } = credentials;

    // Find the user by email
    const user = await User.findOne({ email });

    // If email and password is not found, throw an error
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid Username or Password');
    }

    return user;
  }
}

module.exports = CheckIn;
