const UserService = require('../../services/userService');

class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  // This create a new user
  async createUser(req, res) {
    try {
      const newUser = await this.userService.createUser(req.body);
      res.status(201).json({ message: 'new user created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'error creating user' });
    }
  }

  // To get all the users
  async getAllUsers(req, res) {
    try {
      const allUsers = await this.userService.getAllUsers(req.body);
      res.json(allUsers);
    } catch (error) {
      console.error(error);
      req.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Get users by id
  async getUsersById(req, res) {
    const { id } = req.params;
    try {
      const user = await this.userService.getUsersById(id);
      user
        ? res.json(user)
        : res.status(404).json({ message: 'User not found' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Update User
  async updateUser(req, res) {
    const { id } = req.params;

    try {
      const { updatedRowsCount, updatedRows } =
        (await this.userService.updateUser(id, req.body)(updatedRowsCount > 0))
          ? res.json(updatedRows[0])
          : res.status(404).json({ error: 'User not found' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Delete users by id
  async deleteUsersById(req, res) {
    const { id } = req.params;

    try {
      const deletedRowCount = await this.userService.deleteUser(id);
      deletedRowCount > 0
        ? res.status(204).send()
        : res.status(404).json({ error: 'User not found' });
    } catch (error) {
      console.log(error);
      req.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = UserController;
