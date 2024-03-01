const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

const userRoutes = (userService) => {
  const controller = new UserController(userService);

  router.post('/api/', (req, res) => controller.createUser(req, res));
  router.get('/api/', (req, res) => controller.getAllUsers(req, res));
  router.get('/api/:id', (req, res) => controller.getUsersById(req, res));
  router.get('/api/:id', (req, res) => controller.updateUser(req, res));
  router.delete('/api/:id', (req, res) => controller.deleteUser(req, res));

  return router;
};

// router
//   .route('/api/')
//   .post(UserController.createUser)
//   .get(UserController.getAllUsers)
//   .get(UserController.updateUser)
//   .delete(UserController.deleteUser);

// router.route('/api/:id').get(UserController.getAllUsersById);

module.exports = userRoutes;
