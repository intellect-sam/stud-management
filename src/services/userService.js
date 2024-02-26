const User = require('../models/user');

class UserService {
  constructor(User) {
    this.User = User;
  }

  async createUser(userData) {
    return await this.User.create(userData);
  }

  async getAllUsers() {
    return await this.User.findAll();
  }

  async getUserById(userId) {
    return await this.User.findById(userId);
  }

  async updateUser(userId, userData) {
    const [updatedRowsCount, updatedRows] = await this.User.update(userData, {
      where: { id: userId },
      returning: true,
    });

    return { updatedRowsCount, updatedRows };
  }

  async deleteuser(userId) {
    return await this.User.destroy({
      where: { id: userId },
    });
  }
}

module.exports = UserService;
