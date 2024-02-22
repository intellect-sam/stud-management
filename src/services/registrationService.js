const User = require('../models/user');

class RegistrationService {
  static async addStudent(userData) {
    // check for existing student
    const existingStudent = await User.findOne({
      where: { email: userData.email },
    });

    if (existingStudent) {
      throw new Error(`Student ${userData.email} already exists`);
    }

    // Create a new student
    const newStudent = await User.create(userData);

    return newStudent;
  }
}

module.exports = RegistrationService;
