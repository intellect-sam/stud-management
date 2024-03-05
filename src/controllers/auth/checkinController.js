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
    console.error('Error during login:', error);
    res.status(401).json({ message: 'Invalid email or password' });
  }
};

module.exports = { handleCheckIn };
