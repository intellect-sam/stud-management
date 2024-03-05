const express = require('express');
const router = express.Router();
const checkinController = require('../../controllers/auth/checkinController');

router.post('/', checkinController.handleCheckIn);

module.exports = router;
