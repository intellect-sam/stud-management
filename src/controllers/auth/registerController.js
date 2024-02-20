const userSchema = require('../../cors/validation/userValidation');
const registrationService = require('../../services/registrationService');

const registerStudent = async (req, res) => {
  try {
    // validate user data coming in
    const { error } = userSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      return res.status(400).json(error.details);
    }

    // create user using the registration service
    const user = await registrationService.createUser(req.body);

    return res.status(201).json({
      message: 'New Student created successfully',
      data: user.toJSON(),
    });
  } catch (error) {
    if (error.message.includes('already exists')) {
      return res.status(409).json({ message: 'Already Exist' });
    }
  }
};

module.exports = registerStudent;
