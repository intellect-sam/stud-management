const { RegisterService } = require('../../services/auth/registerService');
const { userSchema } = require('../../validation/userValidation');

const handleNewUser = async (req, res) => {
  try {
    // Validate user data
    const { error } = userSchema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json(error.details);
    }

    // Create user using the UserService
    const user = await RegisterService.createUser(req.body);

    return res.status(201).json({
      message: 'Car owner created successfully',
      data: user.toJSON(),
    });
  } catch (error) {
    if (error.message.includes('already exists')) {
      return res.status(409).json({ message: 'User Already Exist' });
    }
    console.error('Error creating car owner:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { handleNewUser };
