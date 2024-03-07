const handleCheckOut = async (req, res) => {
  try {
    console.log('Checking out');
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};
