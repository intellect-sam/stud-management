const CheckIn = require('../../services/auth/checkinService');

const handleCheckIn = async (req, res) => {
  try {
    const credentials = req.body;
    const user = await CheckIn.loginUser(credentials);

    res.json({
      message: 'Check In successfully',
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    if (error.message === 'Invalid Username or Password') {
      res.status(401).json({ message: 'Invalid email or password' });
    } else if (error.message.includes('already')) {
      res.status(409).json({ message: 'User already checked in' });
    } else {
      // Handle other errors as needed
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = { handleCheckIn };
